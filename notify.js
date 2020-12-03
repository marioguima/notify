var nMinSec;
var nMaxSec;
var sTextShow;

function initNotify(pMinSec = 7, pMaxSec = 15, pTextShow = "Garantiu sua vaga agora!") {
	nMinSec = pMinSec;
	nMaxSec = pMaxSec;
	sTextShow = pTextShow;
}

jQuery(document).ready(function() {

	if(!jQuery('body').hasClass("elementor-editor-active")) {
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var names = ['Ana Julia','Sophia Maya','Julia Maria','Alice Dias','Manuela Farias','Isabella Santos','Laura Martins','Maria Eduarda','Giovanna Gold','Valentina Pontes','Beatriz Santos','Luiza Manuela','Helena Muniz','Maria Luiza','Isadora Ribeiro','Mariana Rios','Gabriela Dantas','Ana Clara','Ana Carla','Ana Flávia','Rafaela Duarte','Maria Clara','Isabelly Souza','Yasmin Costa','Lívia Dias','Lara Beth','Lorena Moreira','Heloísa Rosa','Melissa Maria','Sarah Souza','Ana Luiza','Letícia Brito','Nicole Santos','Ana Beatriz','Emanuely Silva','Esther Korny','Lavínia Bety','Marina Grabiela','Cecília Gomes','Rebeca Fausto','Vitória Dias','Maria Fernanda','Larissa Souza','Clara Dias','Carolina Souza','Bianca Coelho','Alícia Moreira','Fernanda Clock','Gabrielly Kinsk','Catarina Borges','Ana Laura','Emilly Lisa','Eduarda Bruna','Amanda Maria','Pietra Glosk','Agatha Cris','Milena Souza','Maria Alice','Laís Pietra','Maria Julia','Maria Elisa','Elisa Fraga','Stella Muniz','Maria Vitória','Bruna Silva','Ana Sophia','Bárbara Cirila','Maria Cecília','Olivia Maria','Nathalia Brito','Camila Silva','Ana Carolina','Maitê Cintra','Eloá Luana','Luana Luna','Luna Santos','Ana Lívia','Brenda Centil','Alana Spohie','Spohie Bruna','Ana Isabel','Isabel Maria','Mirella Julia','Juliana Assis','Marcela Pires','Isis Moreira','Iara Fátima','Antônia Silva','Kamilly Lis','Alexia Braite','Lis Coelho','Maria Sophia','Joana Dark','Clarice Letra','Ayla Faria','Caroline Maila','Antonella Breda','Evellyn Cloi','Malu Magalhães','Maria Laura','Mikaela Golg','Stefany Brito'];

		toastr.options = {
		  "closeButton": false,
		  "debug": false,
		  "newestOnTop": false,
		  "progressBar": true,
		  "positionClass": "toast-bottom-left",
		  "preventDuplicates": false,
		  "onclick": null,
		  "showDuration": "300",
		  "hideDuration": "500",
		  "timeOut": "3000",
		  "extendedTimeOut": "500",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}

		var handleShowName = setInterval(showName, 5000);
		
		function showName()
		{
			var nName = Math.floor(Math.random() * names.length);
			var name = names[nName];
			names.splice(nName, 1);
			toastr["success"](sTextShow, name);
			clearInterval(handleShowName);
			if (names.length > 0) {
				var interval = getRandomInt(nMinSec,nMaxSec) * 1000;
				handleShowName = setInterval(showName, interval);
			}
		}
	}

});