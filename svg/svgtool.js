var tools = {
    /**
     *
     * Used to get the length of a rect
     *
     * @param el is the rect element ex $('.rect')
     * @return the length of the rect in px
     */
    getRectLength:function(el){
        var w = el.attr('width');
        var h = el.attr('height');

        return (w*2)+(h*2);
    },

    /**
     *
     * Used to get the length of a Polygon
     *
     * @param el is the Polygon element ex $('.polygon')
     * @return the length of the Polygon in px
     */
    getPolygonLength:function(el){
        var points = el.attr('points');
        points = points.split(" ");
        var x1 = null, x2, y1 = null, y2 , lineLength = 0, x3, y3;
        for(var i = 0; i < points.length; i++){
            var coords = points[i].split(",");
            if(x1 == null && y1 == null){

                if(/(\r\n|\n|\r)/gm.test(coords[0])){
                    coords[0] = coords[0].replace(/(\r\n|\n|\r)/gm,"");
                    coords[0] = coords[0].replace(/\s+/g,"");
                }

                if(/(\r\n|\n|\r)/gm.test(coords[1])){
                    coords[0] = coords[1].replace(/(\r\n|\n|\r)/gm,"");
                    coords[0] = coords[1].replace(/\s+/g,"");
                }

                x1 = coords[0];
                y1 = coords[1];
                x3 = coords[0];
                y3 = coords[1];

            }else{

                if(coords[0] != "" && coords[1] != ""){

                    if(/(\r\n|\n|\r)/gm.test(coords[0])){
                        coords[0] = coords[0].replace(/(\r\n|\n|\r)/gm,"");
                        coords[0] = coords[0].replace(/\s+/g,"");
                    }

                    if(/(\r\n|\n|\r)/gm.test(coords[1])){
                        coords[0] = coords[1].replace(/(\r\n|\n|\r)/gm,"");
                        coords[0] = coords[1].replace(/\s+/g,"");
                    }

                    x2 = coords[0];
                    y2 = coords[1];

                    lineLength += Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));

                    x1 = x2;
                    y1 = y2;
                    if(i == points.length-2){
                        lineLength += Math.sqrt(Math.pow((x3-x1), 2)+Math.pow((y3-y1),2));
                    }

                }
            }

        }
        return lineLength;

    },

    /**
     *
     * Used to get the length of a line
     *
     * @param el is the line element ex $('.line')
     * @return the length of the line in px
     */
    getLineLength:function(el){
        var x1 = el.attr('x1');
        var x2 = el.attr('x2');
        var y1 = el.attr('y1');
        var y2 = el.attr('y2');
        var lineLength = Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
        return lineLength;

    },

    /**
     *
     * Used to get the length of a circle
     *
     * @param el is the circle element
     * @return the length of the circle in px
     */
    getCircleLength:function(el){
        var r = el.attr('r');
        var circleLength = 2 * Math.PI * r;
        return circleLength;
    },


    /**
     *
     * Used to get the length of the path
     *
     * @param el is the path element
     * @return the length of the path in px
     */
    getPathLength:function(el){
        var pathCoords = el.get(0);
        var pathLength = pathCoords.getTotalLength();
        return pathLength;
    }
}
