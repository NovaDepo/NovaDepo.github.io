(function guard() {
  let user = null;
  try { user = JSON.parse(localStorage.getItem('novaUser')); } catch (e) { user = null; }
  if (!user) { window.location.replace('../'); return; }

  const name = user.name || 'Kaptan';
  const avatar = document.getElementById('avatar');
  const userName = document.getElementById('userName');
  const welcomeName = document.getElementById('welcomeName');

  // Profil fotoğrafı varsa göster, yoksa baş harf
  if (avatar) {
    if (user.avatar) {
      avatar.innerHTML = '<img src="' + user.avatar + '" alt="profil" />';
    } else {
      avatar.textContent = name.charAt(0).toUpperCase();
    }
  }
  if (userName) userName.textContent = name;
  if (welcomeName) welcomeName.textContent = name;
})();
