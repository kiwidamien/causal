"""
Copy this into a cell to get D3 to load into the 
browser:
---
%%javascript
require.config({
    paths: { 
        d3: 'https://d3js.org/d3.v5.min'
    }
});
---
"""

from IPython.display import display, Javascript, HTML
import json

# This is needed to load d3
# 
display(HTML(filename='tree.css.html'));
display(Javascript(filename="tree.js"))



def draw_d3_element(data, positions, module, func_name, width=600, height=400):
    json_data = json.dumps(data)
    position_data = json.dumps(positions)
    command = """
        (function(element){
            require(['%s'], function(%s) {
                %s(element.get(0), %s, %s, %d, %d);
            });
        })(element);
    """ % (module, func_name, func_name, json_data, position_data, width, height)
    display(Javascript(command))
    
    
def draw_network(data, positions, width=600, height=400):
    """Uses D3 to draw a graph
    
    Parameters:
    data: List of Lists
          Each list contains links of the form [parent_node_label, child_node_label]
          
    Is unable to draw nodes not connected to any other edges
    """
    draw_d3_element(data, positions, 'tree', 'tree', width, height)


def draw_dag(parents_to_children, positions=None, width=600, height=400):
    """Draws a DAG
    
    Parameters:
    parents_to_children: Dictionary
                         Keys are nodes, values are a list of children
    """
    network_data = []
    if positions is None:
        positions = {}
    for parent, children in parents_to_children.items():
        links = [[parent, child] for child in children]
        network_data.extend(links)
    draw_network(network_data, positions, width, height)