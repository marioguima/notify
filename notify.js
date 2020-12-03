jQuery(document).ready(function() {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	var names = ['Ana Julia','Sophia Maya','Julia Maria','Alice Dias','Manuela Farias','Isabella Santos','Laura Martins','Maria Eduarda','Giovanna Gold','Valentina Pontes','Beatriz Santos','Luiza Manuela','Helena Muniz','Maria Luiza','Isadora Ribeiro','Mariana Rios','Gabriela Dantas','Ana Clara','Ana Carla','Ana Flávia','Rafaela Duarte','Maria Clara','Isabelly Souza','Yasmin Costa','Lívia Dias','Lara Beth','Lorena Moreira','Heloísa Rosa','Melissa Maria','Sarah Souza','Ana Luiza','Letícia Brito','Nicole Santos','Ana Beatriz','Emanuely Silva','Esther Korny','Lavínia Bety','Marina Grabiela','Cecília Gomes','Rebeca Fausto','Vitória Dias','Maria Fernanda','Larissa Souza','Clara Dias','Carolina Souza','Bianca Coelho','Alícia Moreira','Fernanda Clock','Gabrielly Kinsk','Catarina Borges','Ana Laura','Emilly Lisa','Eduarda Bruna','Amanda Maria','Pietra Glosk','Agatha Cris','Milena Souza','Maria Alice'];

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
        //   document.getElementById("qtd_nomes").innerHTML = names.length;
        var nName = Math.floor(Math.random() * names.length);
        var name = names[nName];
        names.splice(nName, 1);
        //   document.getElementById("nome").innerHTML = name;
        toastr["success"]("Garantiu sua vaga agora!", name);
        clearInterval(handleShowName);
        //   document.getElementById("intervalo").innerHTML = '';
        if (names.length > 0) {
            var interval = getRandomInt(5,10) * 1000;
            // document.getElementById("intervalo").innerHTML = interval;
            handleShowName = setInterval(showName, interval);
        }
    }
});