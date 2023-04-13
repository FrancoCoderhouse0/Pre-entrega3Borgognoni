const productos = [
    {
    id: 1,
    nombre: "Jostick PS4",
    precio: 5000,
    img:
        "https://imgs.search.brave.com/j4vrxJ9XgeYV6qllDuXjbDjgg0yOZaD3yuPkcnMRn1s/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/YmFrdWVsZWN0cm9u/aWNzLmF6L2Fzc2V0/cy9pbWFnZXMvcHJv/ZHVjdHMvMjYzNzMv/ODFnZWlwMHN5Z2wt/c2wxNTAwLTEuanBn",
    cantidad: 1,
    },
    {
    id: 2,
    nombre: "Jostick Ps5",
    precio: 15000,
    img:
        "https://imgs.search.brave.com/PPHCzocdsVFeix8SGpHvYIKqzxvp6H90yEeFq7hXBdA/rs:fit:1200:787:1/g:ce/aHR0cHM6Ly9yb3Nh/cmlvcGx1cy1hc3Nl/dHMudGFkZXZlbC54/eXovNWY0YWIyYzEx/MmI1MzcyYmFkZmI4/YTJmL2ltYWdlLmpw/ZWc",
    cantidad: 1,
    },
    {
    id: 3,
    nombre: "Play Station 4",
    precio: 150000,
    img:
        "https://imgs.search.brave.com/xr2Kk60HCL6h3vtLw6te7nFspj0quJB-3Y4WITlcNvg/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHVzaHNxdWFy/ZS5jb20vMjM5OTMx/OWYzN2JkZi9wczQt/Y29uc29sZS5vcmln/aW5hbC5qcGc",
    cantidad: 1,
    },
    {
    id: 4,
    nombre: "Play Station 5",
    precio: 200000,
    img:
        "https://imgs.search.brave.com/W-rYDJ1I0kjGj5E4DZZhoI4dxIkDAoH1BTmQ7Ll4oP8/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RvY2t4LmNv/bS9pbWFnZXMvU29u/eS1QbGF5U3RhdGlv/bi1QUzUtQmx1LVJh/eS1FZGl0aW9uLUNv/bnNvbGUtVUstUGx1/Zy1XaGl0ZS5qcGc_/Zml0PWZpbGwmYmc9/RkZGRkZGJnc9NzAw/Jmg9NTAwJmF1dG89/Zm9ybWF0LGNvbXBy/ZXNzJnE9OTAmZHBy/PTImdHJpbT1jb2xv/ciZ1cGRhdGVkX2F0/PTE2MDU4MzUyNzQ",
    cantidad: 1,
    },
    {
        id: 5,
        nombre: "Cargador de Jostick",
        precio: 2000,
        img:
            "https://imgs.search.brave.com/-niVrOof4D1PHNoQrDE2McQQjAFPnty8l1Du4SJIuNY/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF8y/WF82Njc5ODQtTUxB/Mjk5NTMyNzgzNDFf/MDQyMDE5LUYuanBn",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Spider-Man",
        precio: 7000,
        img:
            "https://imgs.search.brave.com/Oz-CHZSjIKDYEyHpgaRk7U8X7d7T_9aDpFaMApz4xcw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2luZW1l/ZGlvcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDcv/c3BpZGVyLW1hbi1t/aWxlcy1tb3JhbGVz/LXBsYXlzdGF0aW9u/LTUtcG9ydGFkYS1q/dWVnby0xLmpwZWc_/c3NsPTE",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Planet coaster",
        precio: 4000,
        img:
            "https://imgs.search.brave.com/yCddRsPUONRryLmYIyKuCjCIrWoPyVzAVGLkaPoHYXk/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9zdGF0/aWNzLnZydXRhbC5j/b20vbS9kZjJmL2Rm/MmYzNDI3MjdhZTM1/NjVjNGU1ZDI4MmM1/YmExMjg0LmpwZw",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "God of War",
        precio: 6000,
        img:
            "https://imgs.search.brave.com/zyp3Pc-Fo4y5UaSJDsKUPsNZFz0b29xon3Z3cdanr-I/rs:fit:378:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/ekJJMXQxb2h0VnNZ/SWpFNFlRNXlnSGFK/UiZwaWQ9QXBp",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "Batlefield 1",
        precio: 3000,
        img:
            "https://imgs.search.brave.com/TqoS82T1y60oIcJIIceBPLW5gS9lDu9-0sGiWIv87Z4/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/ZnBCV1hjNzlDN2d4/MklraGZTdW53SGFI/YSZwaWQ9QXBp",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "The last of us 2",
        precio: 10000,
        img:
            "https://imgs.search.brave.com/tGkvQtAGVuQ0FAcjEMSn4oo4XL77piD27YUimWqzSGw/rs:fit:1188:1200:1/g:ce/aHR0cHM6Ly93d3cu/YWR2ZW50dXJlY29y/bmVyLmRlL3VwbG9h/ZHMvaW1hZ2VzL05l/d3NiaWxkZXIyMDIw/L2xhc3RvZnVzMi5q/cGc",
        cantidad: 1,
    },
];
