(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"../images/duang.png", id:"duang"},
		{src:"../images/s2.jpg", id:"s2"}
	]
};



// symbols:



(lib.duang = function() {
	this.initialize(img.duang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,28);


(lib.s2 = function() {
	this.initialize(img.s2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1029);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.duang();
	this.instance.setTransform(-26.5,-14,0.655,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-14,53.1,28);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.duang();
	this.instance.setTransform(-40.5,-14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-14,81,28);


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(82,-24);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-271.9,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-271.9,y:35},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.5,-38,81,28);


// stage content:



(lib.test = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2();
	this.instance.setTransform(94,13.5,0.637,0.345);

	this.instance_1 = new lib.s1();
	this.instance_1.setTransform(53,27,1,1,0,0,0,82,-24);

	this.instance_2 = new lib.duang();
	this.instance_2.setTransform(898.5,98);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(287.5,213,967,355.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;