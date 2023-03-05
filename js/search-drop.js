
(function($) {
    
    $.fn.tipuedrop = function(options) {
        
        var set = $.extend( {
            
            'show'                   : 3,
            'speed'                  : 300,
            'newWindow'              : false,
            'mode'                   : 'static'
            
        }, options);
        
        return this.each(function() {
            
            var tipuedrop_in = {
                pages: []
            };
            $.ajaxSetup({
                async: false
            });
            
            if (set.mode == 'static')
            {
                tipuedrop_in = $.extend({}, tipuedrop);
            }
            
            $(this).keyup(function(event)
                {
                    getTipuedrop($(this));
                });               
                
                function getTipuedrop($obj)
                {
                    if ($obj.val())
                    {
                        var c = 0;
                        for (var i = 0; i < tipuedrop_in.pages.length; i++)
                        {
                            var pat = new RegExp($obj.val(), 'i');
                            if ((tipuedrop_in.pages[i].title.search(pat) != -1 || tipuedrop_in.pages[i].text.search(pat) != -1) && c < set.show)
                            {
                                if (c == 0)
                                {
                                    var out = '<div class="row-responsive m-1">';    
                                }
                                out += '<a href="' + tipuedrop_in.pages[i].url + '"';
                                if (set.newWindow)
                                {
                                    out += ' target="_blank"';
                                }
                                out += '><div class="col-12 bg-white border border-danger rounded my-2 p-2 bounceInUp universal-search-result-card"><span class="font-weight-bold"><img class="mr-4 universal-card-img" src="' + tipuedrop_in.pages[i].thumb + '" alt="..."/>' + tipuedrop_in.pages[i].title + '</span></div>';c++;
                            }
                        }
                        if (c != 0)
                        {
                            out += '</div>';               
                            $('#search_drop_content').html(out);
                            $('#search_drop_content').fadeIn(set.speed);
                        }
                    }
                    else
                    {
                        $('#search_drop_content').fadeOut(set.speed);
                    }
                }
                
                $('html').click(function()
                    {
                        $('#search_drop_content').fadeOut(set.speed);
                    });
                    
        });
    };
    
})(jQuery);
