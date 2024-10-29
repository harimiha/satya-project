// Sidebar Animation
const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

// Active Sidebar
// Menambahkan event listener untuk semua link di dalam item sidebar
document.querySelectorAll('.sidebar-nav li.sidebar-item a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Menghentikan aksi default link
        event.preventDefault();

        // Cek jika elemen yang diklik tidak memiliki class 'collapsed'
        if (!this.classList.contains('collapsed')) {
            // Menghapus class 'active' dari semua item di dalam sidebar
            document.querySelectorAll('.sidebar-nav li.sidebar-item.active').forEach(function(activeItem) {
                activeItem.classList.remove('active');
            });

            // Menambahkan class 'active' pada item yang diklik
            this.closest('li.sidebar-item').classList.add('active');
        }
    });
});

