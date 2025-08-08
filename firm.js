// URL de la base de datos en tiempo real de Firebase (misdespachos-34343).
const DATABASE_URL = 'https://misdespachos-34343-default-rtdb.firebaseio.com';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('firmContainer');
  // Obtiene ID desde la URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);

  // Recupera datos desde localStorage (sólo para la lista de despachos, ya no se usan las reseñas locales)
  let firms = [];
  try {
    const stored = localStorage.getItem('firmsData');
    if (stored) firms = JSON.parse(stored);
  } catch (e) {
    console.error('Error al parsear datos de despachos', e);
  }

  const firm = firms.find(f => f.id === id);
  if (!firm) {
    container.innerHTML = '<p>Despacho no encontrado.</p>';
    return;
  }

  // Funciones para calcular promedios
  function averageByKey(reviews, key) {
    if (!reviews || !reviews.length) return 0;
    const sum = reviews.reduce((acc, r) => acc + (r[key] || 0), 0);
    return sum / reviews.length;
  }
  function calculateOverall(firm) {
    if (!firm.reviews.length) return 0;
    const a = averageByKey(firm.reviews, 'ambiente');
    const p = averageByKey(firm.reviews, 'prestigio');
    const o = averageByKey(firm.reviews, 'oportunidades');
    return (a + p + o) / 3;
  }
  function getRatingClass(avg) {
    if (avg >= 4) return 'rating-high';
    if (avg >= 2.5) return 'rating-mid';
    return 'rating-low';
  }

  // -------------------------------------------------------------------------
  // Integración con Firebase
  // -------------------------------------------------------------------------
  // Obtiene las reseñas remotas para este despacho y las guarda en firm.reviews.
  async function fetchReviewsFromDB() {
    try {
      const response = await fetch(`${DATABASE_URL}/reviews.json`);
      if (!response.ok) throw new Error('Error al obtener reseñas remotas');
      const data = await response.json();
      // Limpiar reseñas actuales
      firm.reviews = [];
      if (data) {
        Object.values(data).forEach(item => {
          if (item.firmId === id) {
            firm.reviews.push({
              ambiente: item.ambiente,
              prestigio: item.prestigio,
              oportunidades: item.oportunidades,
              comment: item.comment
            });
          }
        });
      }
    } catch (error) {
      console.error('Error al sincronizar reseñas con Firebase', error);
    }
  }

  // Envía una nueva reseña a la base de datos.
  async function postReviewToDB(review) {
    try {
      await fetch(`${DATABASE_URL}/reviews.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
      });
    } catch (error) {
      console.error('Error al guardar reseña en Firebase', error);
    }
  }

  // Renderiza la página completa
  async function render() {
    // Asegurarse de tener las reseñas remotas antes de mostrar el contenido
    await fetchReviewsFromDB();
    const avgAmbiente = averageByKey(firm.reviews, 'ambiente');
    const avgPrestigio = averageByKey(firm.reviews, 'prestigio');
    const avgOportunidades = averageByKey(firm.reviews, 'oportunidades');
    const overall = calculateOverall(firm);
    const ratingClass = getRatingClass(overall);

    container.innerHTML = '';
    // Encabezado del despacho
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('firm-header');
    headerDiv.style.marginTop = '20px';
    headerDiv.innerHTML = `
      <div class="rating-circle ${ratingClass}">${overall ? overall.toFixed(1) : 'N/A'}</div>
      <h2>${firm.name}</h2>
    `;
    container.appendChild(headerDiv);

    // Descripción y ofertas
    const infoP = document.createElement('p');
    infoP.textContent = firm.description;
    container.appendChild(infoP);
    const jobsP = document.createElement('p');
    jobsP.innerHTML = `<strong>Ofertas:</strong> ${firm.jobs.join(', ')}`;
    container.appendChild(jobsP);

    // Promedios por categoría
    const catGrid = document.createElement('div');
    catGrid.classList.add('category-grid');
    catGrid.innerHTML = `
      <div class="category-item">
        <h4>Ambiente</h4>
        <p>${firm.reviews.length ? avgAmbiente.toFixed(1) : 'N/A'}</p>
      </div>
      <div class="category-item">
        <h4>Prestigio</h4>
        <p>${firm.reviews.length ? avgPrestigio.toFixed(1) : 'N/A'}</p>
      </div>
      <div class="category-item">
        <h4>Oportunidades</h4>
        <p>${firm.reviews.length ? avgOportunidades.toFixed(1) : 'N/A'}</p>
      </div>
    `;
    container.appendChild(catGrid);

    // Sección de reseñas
    const reviewsDiv = document.createElement('div');
    reviewsDiv.classList.add('reviews-section');
    const title = document.createElement('h3');
    title.textContent = `Reseñas (${firm.reviews.length})`;
    reviewsDiv.appendChild(title);
    if (firm.reviews.length) {
      firm.reviews.forEach(r => {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `
          <p class="categories"><strong>Ambiente:</strong> ${r.ambiente} | <strong>Prestigio:</strong> ${r.prestigio} | <strong>Oportunidades:</strong> ${r.oportunidades}</p>
          <p>${r.comment}</p>
        `;
        reviewsDiv.appendChild(div);
      });
    } else {
      const noReviews = document.createElement('p');
      noReviews.textContent = 'Aún no hay reseñas para este despacho.';
      reviewsDiv.appendChild(noReviews);
    }
    container.appendChild(reviewsDiv);

    // Formulario para nueva reseña
    const formDiv = document.createElement('div');
    formDiv.classList.add('review-form');
    formDiv.innerHTML = `
      <h3>Agregar reseña</h3>
      <form id="newReviewForm">
        <label for="ambiente">Ambiente (1-5)</label>
        <select id="ambiente" name="ambiente" required>
          <option value="">Selecciona</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="prestigio">Prestigio (1-5)</label>
        <select id="prestigio" name="prestigio" required>
          <option value="">Selecciona</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="oportunidades">Oportunidades (1-5)</label>
        <select id="oportunidades" name="oportunidades" required>
          <option value="">Selecciona</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="comment">Comentario</label>
        <textarea id="comment" required></textarea>
        <button type="submit">Enviar reseña</button>
      </form>
    `;
    container.appendChild(formDiv);

    const newReviewForm = document.getElementById('newReviewForm');
    newReviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const amb = parseInt(document.getElementById('ambiente').value);
      const pre = parseInt(document.getElementById('prestigio').value);
      const op = parseInt(document.getElementById('oportunidades').value);
      const com = document.getElementById('comment').value.trim();
      if (!amb || !pre || !op || !com) return;
      // Construir objeto de reseña con el id del despacho
      const review = {
        firmId: id,
        ambiente: amb,
        prestigio: pre,
        oportunidades: op,
        comment: com
      };
      // Enviar a la base de datos remota
      await postReviewToDB(review);
      // Vuelve a renderizar para mostrar la nueva reseña
      await render();
      // Opcional: restablecer el formulario
      newReviewForm.reset();
    });
  }

  // Inicializa página
  await render();
});
