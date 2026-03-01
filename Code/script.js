function getRecommendation() {

    var room = $("#room").val();
    var style = $("#style").val();
    var budget = $("#budget").val();

    var result = $("#result");
    result.hide();
    result.html("");

    var items = [];

    if(room == "Living Room" && style == "Modern"){
        items = [
            {name: "Modern Sofa Set", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"},
            {name: "Glass Coffee Table", img: "https://images.unsplash.com/photo-1582582494700-1b5a6e2c7b4e"},
            {name: "LED Wall Panel", img: "https://images.unsplash.com/photo-1598300053653-1c4c1e2d1a19"}
        ];
    }
    else if(room == "Bedroom" && style == "Minimal"){
        items = [
            {name: "Minimal Bed Frame", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"},
            {name: "Soft Night Lamp", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"},
            {name: "Neutral Wall Art", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"}
        ];
    }
    else{
        items = [
            {name: "Indoor Plants", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"},
            {name: "Wall Frames", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"},
            {name: "Stylish Rug", img: "https://images.unsplash.com/photo-1598300053653-1c4c1e2d1a19"}
        ];
    }

    items.forEach(function(item){
        result.append(`
            <div class="col-md-4">
                <div class="card shadow mb-4">
                    <img src="${item.img}" class="card-img-top" height="200">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p>Budget: ${budget}</p>
                    </div>
                </div>
            </div>
        `);
    });

    result.fadeIn(800);
}