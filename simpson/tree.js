require.undef('tree');

define('tree', ['d3'], (d3) => {
    const draw = (container, data, positions, width, height) => {
        width = width || 600;
        height = height || 200;
        const svg = d3.select(container)
                      .append('svg')
                      .attr('width', width)
                      .attr('height', height)
                      .append('g');
        
        /*
         * Script here taken and modified from
         * https://gist.github.com/strawstack/bd339d1b304a6bf02d68bfdc80e1f2d1
         * 
         * Accompying blog post:
         * https://regularmemory.blog/post/draggable-network-graph-with-d3js/
         */
        const RADIUS = 20;
        const randomLoc = () => RADIUS + (width - 2*RADIUS) * Math.random();

        // Object to hold nodes and edges
        let graph = {"nodes": {}, "edges": []};

        // For each edge from graph.json
        // create an object with a source and target
        graph.edges = data.map( edge => { 
            return {
                source: edge[0],
                target: edge[1]
        }});

        // Create flat (1-dimensional) array from the list of edges
        let nodes = data.flat();
        // Remove duplicates from the list of vertices
        nodes = [...new Set(nodes)];

        // Create dictionary where each node will map to its properties
        for (node of nodes) {
            // Assign random coordinates to each vertex if not given in
            // positions object
            const location = (positions && positions[node]) || [randomLoc(), randomLoc()];
            graph.nodes[node] = {
                label: node,
                x: location[0],
                y: location[1]
            };
        }

        // Add node refs to each link
        graph.edges.forEach(d => {
            d.source = graph.nodes[d.source];
            d.target = graph.nodes[d.target];
        });
        
        svg.append('defs').append('marker')
    .attr("id",'arrowhead')
    .attr('viewBox','-0 -5 10 10') //the bound of the SVG viewport for the current SVG fragment. defines a coordinate system 10 wide and 10 high starting on (0,-5)
     .attr('refX',23) // x coordinate for the reference point of the marker. If circle is bigger, this need to be bigger.
     .attr('refY',0)
     .attr('orient','auto')
        .attr('markerWidth',13)
        .attr('markerHeight',13)
        .attr('xoverflow','visible')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#999')
    .style('stroke','none');

        //console.log(graph);

        var edge = svg.selectAll(".edge")
            .data(graph.edges)
            .enter().append("line")
            .attr("class", "edge")
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y)
            .attr('marker-end','url(#arrowhead)');

        var node = svg.selectAll("node")
            .data(Object.values(graph.nodes))
            .enter().append("g")
            .attr("class", "node");

        node.append("circle")
            .attr("r", 20)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .call(d3.drag().on("drag", dragged));

        node.append("text")
            .attr("dx", d => d.x)
            .attr("dy", d => d.y)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("pointer-events", "none")
            .text(d => d.label);

        function dragged(d) {
            d.x = d3.event.x, d.y = d3.event.y;
            d3.select(this).attr("cx", d.x).attr("cy", d.y);
            d3.select(this.parentNode).select("text").attr("dx", d.x).attr("dy", d.y);
            edge.filter(function(l) { return l.source === d; }).attr("x1", d.x).attr("y1", d.y);
            edge.filter(function(l) { return l.target === d; }).attr("x2", d.x).attr("y2", d.y);
        }


    }
    return draw;
});

element.append('<small>&#x25C9; &#x25CB; &#x25EF; Loaded tree.js &#x25CC; &#x25CE; &#x25CF;</small>');