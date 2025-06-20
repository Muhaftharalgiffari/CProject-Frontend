const API_URL = import.meta.env.VITE_API_URL || 'https://cproject-backend-production.up.railway.app/api';

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Gagal mengupload gambar');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error.message || 'Gagal mengupload gambar');
  }
};

// Fungsi untuk menyimpan riwayat ke localStorage
export const saveHistory = (prediction) => {
  try {
    const history = JSON.parse(localStorage.getItem('predictionHistory') || '[]');
    history.unshift({
      ...prediction,
      timestamp: new Date().toISOString(),
    });
    
    // Simpan maksimal 10 riwayat terakhir
    const limitedHistory = history.slice(0, 10);
    localStorage.setItem('predictionHistory', JSON.stringify(limitedHistory));
  } catch (error) {
    console.error('Error menyimpan riwayat:', error);
  }
};

// Fungsi untuk mengambil riwayat dari localStorage
export const getHistory = () => {
  try {
    return JSON.parse(localStorage.getItem('predictionHistory') || '[]');
  } catch (error) {
    console.error('Error mengambil riwayat:', error);
    return [];
  }
}; 