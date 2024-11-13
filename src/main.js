import './style.css'

document.querySelectorAll('.w-full.h-full').forEach(item => {
    item.addEventListener('click', function () {
      const imgSrc = this.querySelector('img').src;
      document.getElementById('modalImage').src = imgSrc;
      document.getElementById('modal').classList.remove('hidden');
    });
});
  
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden');
});
  