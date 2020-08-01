$(function () {

    //Materialize 
    //   $('.datepicker').datepicker();

    // event listenter for button(s)

    var searchDate = "2020-07-28";
    const apodImg = $("#imgSearch");
    const photoDetails = $("#textHere");
    let marsQ = [];

    $("#Btn1").on("click", function () {
        var settings = {
            "url": "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=999&camera=mast&api_key=DEMO_KEY",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            //console.log(response);
          })
            .then(function (response) {
                let results = response.data;
                console.log(results);
                for (let i = 0; i < 10; i++) {
                    console.log(response.photos.img_src [i]);
                    marsQ [i] = response.photos.img_src [i];
                }
                // const imgURL = response.img_src;
                // apodImg.attr("src", imgURL);
                // // const apodDiv = $("<div>");
                // const photoText = response.camera;
                // photoDetails.text(photoText);
            });
    });

    $("#Btn2").on("click", function () {
        var settings = {
            "url": "https://api.nasa.gov/planetary/apod?api_key=vpUsbRtc2uBC7le2YXjPI6Nk1E5HtnsevXOvkGTe&date=" + searchDate,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        })

        .then(function(response) {
            let results = response.data;
            console.log(results);
            const imgURL = response.url;
            apodImg.attr("src", imgURL);
            // const apodDiv = $("<div>");
            const photoText = response.explanation;
            photoDetails.text(photoText);
         });
    });
    

    // Dynamically add elements to page to display image 

    // link with key 
    // https://api.nasa.gov/planetary/apod?api_key=eyXRExqNDHTblcMXT6ShJzFdoCQWXOLEPjII8Qlc

 
});