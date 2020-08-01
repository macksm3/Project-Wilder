$(function (){

    // Photo array. This will have to change once save button works.
    let photoArray = [
        "https://apod.nasa.gov/apod/image/2007/Mars2020launchKraus1024.jpg", 
        "https://apod.nasa.gov/apod/image/2007/Kristine-Rose-Photography-20200616_001s1024.jpg", 
        "https://apod.nasa.gov/apod/image/2007/N6188_Cappelletti_960.jpg", 
        "https://apod.nasa.gov/apod/image/2007/ldn1251_jerahian1024.jpg", 
        "https://apod.nasa.gov/apod/image/2007/msv1000crop.jpg"
    ]
    // console.log(photoArray);

    const imgDisplay = $("#imgCollection");
    let photoIndex = 0;

    $(imgDisplay).attr("src", "https://via.placeholder.com/400x300.jpg/000044/ffffff?text=Pictures+From+Space");
    
    $("#btnCollectionNext").on("click", function(event) {
        event.preventDefault();
        imageURL = photoArray[photoIndex];
        console.log(`image ${photoIndex} is ${imageURL}`);
        $(imgDisplay).attr("src", imageURL);
        
        photoIndex++;
        if (photoIndex >= photoArray.length) {
            photoIndex = 0;
        };
        let photoText = response.explanation[photoIndex];
        photoDetails.text(photoText);

    })

    $("#btnCollectionPrev").on("click", function(event) {
        event.preventDefault();
        imageURL = photoArray[photoIndex];
        console.log(`image ${photoIndex} is ${imageURL}`);
        $(imgDisplay).attr("src", imageURL);

        photoIndex--;
        if (photoIndex <= 0) {
            photoIndex = photoArray.length - 1;
        };
    })

    // Generate a remove button to delete relevant images 

    // $("#btnCollection").on("click", function (event) {
    //     // Stops page from refreshing when button is clicked
    //     event.preventDefault();

    
    //     // photoArray.forEach(function(photoURL) {
    //     //     console.log(photoURL);
        
    //     //     let imageURL = photoURL;
    //     //     $("#imgSearch").attr("src", imageURL);
    //     //     //Need to call local storage
          
    //     // }) ;

        

        
    //     // show everything that has been stored locally 


    // })


});