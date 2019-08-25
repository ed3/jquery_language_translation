(function($){
$.fn.translate = function(opt){
	var sett = $.extend({default_lang: "en", langs: "#langs", source: "text"}, opt), attributes = {}, el = this;
	function init(lang){
		$(sett.langs+" option[value='"+lang+"']").attr("selected","selected");
		set_lang(sett.source[lang]);
	}
	function set_lang(t){
	$(el).text(function(){
		var nod = this.attributes[0].nodeName;
		if (nod.indexOf("data-trans-") === 0){
			var key = nod.split("-");
			if(t.hasOwnProperty(key[2])){
			return t[key[2]];
			}
		}
	});
	}
	if($(sett.langs)[0].nodeName.toLowerCase() == 'select') {
	$(sett.langs).on("change", function(){
		var lang = $(this).val();
		if(sett.source.hasOwnProperty(lang)){
		$.cookie("lng",lang);
		set_lang(sett.source[lang]);
		}
	});
	} else {
	$(sett.langs).children().on("click", function(){
		var lang = $(this).attr("id");
		if(sett.source.hasOwnProperty(lang)){
		$.cookie("lng",lang);
		set_lang(sett.source[lang]);
		}
		return false;
	});
	}
	if($.cookie("lng")) return init($.cookie("lng"));
	else return init(sett.default_lang);
};
})(jQuery);
