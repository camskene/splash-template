

// quote rotation
// $("#quotes").cycle();


/*  submit e-list form via ajax
------------------------------------------------------------------------ */

function checkEmail(email) { 
    var pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailVal = $("#" + email).val();
    return pattern.test(emailVal);
}

$("#cm").on("submit", function(e) {
    e.preventDefault();
    
    var id = "xxxxx", // CHANGE THIS!
        emailId = id + "-" + id,
        formAction = $("#cm").attr("action"),
        str = $("#cm").serialize(),
        serialized = str + "&action=" + formAction;
        //confirmation = $("<div id='confirmation'>Thank you.</div>");
    
    if (!checkEmail(emailId)) {
        alert("Please enter a valid email address");
        return;
    }
    
    $.ajax({
        url: "php/proxy.php",
        type: "POST",
        data: serialized,
        statusCode: {
            200: function() {
                $("#cm").hide();
                $("#cm-box").append('<p id="confirmation">Thank you.</p>')
                $("#confirmation").delay(1000).fadeOut(function(){
                    //$("#cm").reset();
                    $("#cm").fadeIn(function() {
                        this.reset();
                    });
                });  
            }
        }
    });
});


/*  referral ticket links
------------------------------------------------------------------------ */

function tixref(tixclass, url) {
    $(tixclass).attr("href",url);
}

if ( $.cookie("refersource") == null ) {
    var origin = location.hash;
    var ref = origin.split("#");
    $.cookie("refersource", ref[1], { expires: 30 });
}

if ($.cookie('refersource') == "googsearch") {
    tixref("#btn-get-tix a","");
}

if ($.cookie('refersource') == "googremkt") {
    tixref("#btn-get-tix a","");
}

if ($.cookie('refersource') == "facebook") {
    tixref("#btn-get-tix a","");
}


/*  video
-------------------------------------------------------------------------------- */

$("#load-video").click(function(e) {
    e.preventDefault();
    video.init("fYTSm-zihbI");
})

 var video = {
    play: function() {
        video.container.tubeplayer("play");
    },
    destroy: function() {
        video.container.tubeplayer("destroy");
        video.container.remove();
        video.isOpen = false;
    },
    isPlaying: function() {
        //console.log("video is playing");
    },
    paused: function() {
        //console.log("video is paused");
    },
    buffering: function() {
        //console.log("video is buffering");
    },
    mute: function() {
        video.container.tubeplayer("mute");
    },
    closeBtn: function() {
        $('<div id="close">Close</div>').appendTo(video.container).click(function() {
            video.destroy();
        });
    },
    playerReady: function() {
        video.play();
        //video.mute();
        video.closeBtn();
        
    },
    container: $('<div id="player">'),
    isOpen: false,
    init: function(videoID) {
        if (!video.isOpen) {
            video.isOpen = true;
            video.container.appendTo("body");
            video.container.tubeplayer({
                initialVideo: videoID,
                width: 600,
                height: 450,
                showControls: 1,
                modestbranding: false,
                onPlayerPaused: video.paused,
                onPlayerBuffering: video.buffering,
                onPlayerPlaying: video.isPlaying,
                onPlayerEnded: video.destroy
            });
        }
        $.tubeplayer.defaults.afterReady = video.playerReady
    }
};

