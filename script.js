$(document).ready(function (){
    const imagenes = [
        "url('./public/images/fondo-carrusel-117.png')",
        "url('./public/images/background2.webp')",
        "url('./public/images/background3.jpeg')"
    ];

    let indice = 0;


    $("#flechaIzq").click(function() {
        if(indice == 0){
            indice = 3;
        }
        else{
            indice--;
        }
        $("#hero").css("background-image", imagenes[indice]);
    });

    $("#flechaDer").click(function() {
        if(indice + 1 == 3){
            indice = 0;
        }
        else{
            indice++;
        }
        $("#hero").css("background-image", imagenes[indice]);
    });

    function recargarTestimonials(){
        $("#testimonials").empty();
        generarTestimonials();
    }
    
    function generarTestimonials(){
        $.getJSON("https://randomuser.me/api/?results=4", function (data) {
            $.each(data.results, function (index, usuario) {
                const testimonialExterior = `
                    <div class="testimonial-exterior">
                        <img class="imagen-exterior" src="${usuario.picture.large}">
                        <h3 class="testimonial-texto">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</h3>
                        <p class="testimonial-nombre">${usuario.name.first} ${usuario.name.last}</p>
                    </div>`;
                
                $("#testimonials").append(testimonialExterior);
            
            }).fail(function (error){
                console.log('Error!: ', error);
            })
        })
    }
    
    recargarTestimonials();
});