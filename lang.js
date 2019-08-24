var dict = {
"en":{"hey":"Hey"},
"ja":{"hey":"じゃ"}
};
$(function(){
	function init(lang){
		$("#langs option[value='"+lang+"']").attr("selected","selected");
		set_lang(dict[lang]);
	}
	function set_lang(dict){
	$("span").text(function(){
		var nod = this.attributes[0].nodeName;
		if (nod.indexOf("data-trans-") === 0){
			var key = nod.split("-");
			if(dict.hasOwnProperty(key[2])){
			return dict[key[2]];
			}
		}
	});
	}
	$("#langs").on("change", function(){
		var lang = $(this).val();
		if(dict.hasOwnProperty(lang)){
		$.cookie("lng",lang);
		set_lang(dict[lang]);
		}
	});
	if($.cookie("lng")) init($.cookie("lng"));
	else init("en");
});