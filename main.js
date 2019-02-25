// method

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title) {
    console.log(this);
};

const v = new Video('b');

// 
const video_one = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);// the only method in this statement is showTag.
    }
};

video.showTags();

