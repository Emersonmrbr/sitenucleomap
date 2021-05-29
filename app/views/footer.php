<?php
// ================
// COMEÇO DO RODAPÉ
// ================

// Todo o conteudo do rodapé se encotra nessa seção.
?>

<h3 class="clFooterDescription">Qualidade. Tecnologia. Inovação.</h3>
<ul class="clFooterSocialnetwork">
	<li>
		<a href="https://www.linkedin.com/company/nucleo-map/" target="_blank">
			<img src="app/assets/image/linkedin48x48.svg">
		</a>
	</li>
	<li>
		<a href="https://www.facebook.com/nucleomap/" target="_blank">
			<img src="app/assets/image/facebook48x48.svg">
		</a>
	</li>
	<li>
		<a href="https://www.instagram.com/nucleomap/" target="_blank">
			<img src="app/assets/image/instagram48x48.svg">
		</a>
	</li>
	<li>
		<a href="https://www.youtube.com/" target="_blank">
			<img src="app/assets/image/youtube48x48.svg">
		</a>
	</li>
</ul>
<div class="clFooterNav1">
	<h4>Empresa</h4>
	<nav>
		<ul>
			<li>
				<a href="?pagina=sobreNos" target="_self" class="clNavLink">sobre nós</a>
			</li>
			<li>
				<a href="?pagina=localizacao" target="_self" class="clNavLink">localização</a>
			</li>
			<li>
				<a href="?pagina=contato" target="_self" class="clNavLink">contato</a>
			</li>
		</ul>
	</nav>
</div>
<div class="clFooterNav2">
	<h4>Serviços</h4>
	<nav>
		<ul>
			<li>
				<a href="?pagina=projetoEletrico" target="_self" class="clNavLink">projeto elétrico</a>
			</li>
			<li>
				<a href="?pagina=projetoMecanico " target="_self" class="clNavLink">projeto mecânico</a>
			</li>
			<li>
				<a href="?pagina=robotica" target="_self" class="clNavLink">robótica</a>
			</li>
			<li>
				<a href="?pagina=automacaoIndustrial" target="_self" class="clNavLink">automação industrial</a>
			</li>
			<li>
				<a href="?pagina=automacaoResidencial" target="_self" class="clNavLink">automação residencial</a>
			</li>
		</ul>
	</nav>
</div>
<div id="idNav1" class="clFooterMobileNav1">
	<h4 onclick="footerNav1()">Empresa</h4>
	<nav data-anime="top">
		<ul>
			<li>
				<a href="?pagina=sobreNos" target="_self" class="clNavLink">sobre nós</a>
			</li>
			<li>
				<a href="?pagina=localizacao" target="_self" class="clNavLink">localização</a>
			</li>
			<li>
				<a href="?pagina=contato" target="_self" class="clNavLink">contato</a>
			</li>
		</ul>
	</nav>
</div>
<div id="idNav2" class="clFooterMobileNav2">
	<h4 onclick="footerNav2()">Serviços</h4>
	<nav data-anime="top">
		<ul>
			<li>
				<a href="?pagina=projetoEletrico" target="_self" class="clNavLink">projeto elétrico</a>
			</li>
			<li>
				<a href="?pagina=projetoMecanico " target="_self" class="clNavLink">projeto mecânico</a>
			</li>
			<li>
				<a href="?pagina=robotica" target="_self" class="clNavLink">robótica</a>
			</li>
			<li>
				<a href="?pagina=automacaoIndustrial" target="_self" class="clNavLink">automação industrial</a>
			</li>
			<li>
				<a href="?pagina=automacaoResidencial" target="_self" class="clNavLink">automação residencial</a>
			</li>
		</ul>
	</nav>
</div>
<div class="clFooterDetails">
	<h4 class="clFooterLocal">Empresa original do Brasil</h4>
	<p class="clFooterCopyright">
		<a>Copyright &copy; <?php echo date("Y") ?> NÚCLEO MAP. Todos os direitos reservados.</a>
	</p>
</div>
<svg class="clFooterLineFull">
	<g class="clFooterLineBlue">
		<line x1="0" y1="12.5" x2="100%" y2="12.5"></line>
	</g>
	<g class="clFooterLineGrey">
		<line x1="0" y1="17.5" x2="100%" y2="17.5"></line>
	</g>
</svg>
<svg class="clFooterLines">
	<g class="clFooterBackground">
		<path d="M0,0 85,0 135,-80 486,-80 486,0"></path>
	</g>
	<g class="clFooterLineBlue">
		<line x1="0" y1="12.5" x2="100" y2="12.5"></line>
		<line x1="100" y1="12.5" x2="150" y2="-67.5"></line>
		<line x1="150" y1="-67.5" x2="100%" y2="-67.5"></line>
	</g>
	<g class="clFooterLineGrey">
		<line x1="0" y1="17.5" x2="90" y2="17.5"></line>
		<line x1="90" y1="17.5" x2="140" y2="-62.5"></line>
		<line x1="140" y1="-62.5" x2="100%" y2="-62.5"></line>
	</g>
</svg>
<script src="app/assets/js/footer.js"></script>
<script src="app/assets/js/header.js"></script>