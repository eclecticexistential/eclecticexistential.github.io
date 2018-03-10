function regionalBLS() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = document.getElementById('2dc3c479-ebc3-4555-b07e-207b63ef5c28').textContent;
                  var render_items = [{"docid":"b33c591a-1f4e-4333-9ebd-055013a0cae8","elementid":"fddc9934-2232-4605-9cb9-d85b6120e80b","modelid":"a3aa5713-4141-4559-8a3d-142ccc679368"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          };
		  
function regionalCensus() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = document.getElementById('02aa327e-97c7-466b-8960-bf73e4fc7628').textContent;
                  var render_items = [{"docid":"1723093f-d169-43e1-a8dc-bf8036a396d9","elementid":"d83e0c64-22a2-4631-937c-c6f7c1e7141a","modelid":"a0c2cdff-2d05-4ce6-8a41-a179f60a3c5e"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          };

function blsBar() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {

                  var docs_json = document.getElementById('86b81b36-700d-4452-9fdc-5237f0381230').textContent;
                  var render_items = [{"docid":"7a67d118-a5b3-4eb7-91b7-9d2dda74d8fe","elementid":"b31442e1-41ef-45f9-a6b2-c3190f3db8a5","modelid":"73641d76-527d-4c2f-90f0-acb72e20398c"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);

                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          };
		  
function census() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = document.getElementById('fc799463-b529-4f2d-bc96-1d2e1a822306').textContent;
                  var render_items = [{"docid":"5ef22d5c-f364-42fb-96e1-9dfd739ee771","elementid":"dc39d561-d44a-45e5-8123-38cf812e3ec7","modelid":"d3905b47-e452-4cc7-b640-1f572511d9dc"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          };

		  
blsBar();		  
		  
setTimeout(function(){
    regionalBLS();
}, 500);

setTimeout(function(){
    regionalCensus();
}, 750);

setTimeout(function(){
    census();
}, 500);
