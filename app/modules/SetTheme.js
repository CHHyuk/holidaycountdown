export default function setTheme(theme) {
  if (theme === 'spring') {
    document.documentElement.style.setProperty('--primary-color', '#FFD700');
    document.documentElement.style.setProperty('--secondary-color', '#8B00FF');
    document.documentElement.style.setProperty('--text-color', '#FFD700');
  } else if (theme === 'summer') {
    document.documentElement.style.setProperty('--primary-color', '#00BFFF');
    document.documentElement.style.setProperty('--secondary-color', '#FFA500');
    document.documentElement.style.setProperty('--text-color', '#00BFFF');
  } else if (theme === 'autumn') {
    document.documentElement.style.setProperty('--primary-color', '#FF4500');
    document.documentElement.style.setProperty('--secondary-color', '#228B22');
    document.documentElement.style.setProperty('--text-color', '#FF4500');
  } else if (theme === 'winter') {
    document.documentElement.style.setProperty('--primary-color', '#FFFFFF');
    document.documentElement.style.setProperty('--secondary-color', '#000080');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
  }
}
