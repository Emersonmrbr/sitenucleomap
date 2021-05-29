<?php
// ===================
// COMEÇO DO CABEÇALHO
// ===================

// Todo o conteudo do cabeçalho se encotra nessa seção.
$itenNav;
?>
<h1 style="display: none;">Núcleo MAP</h1>
<h2 style="display: none;">Uma nova era em utomação.</h2>
<h1 style="display: none;">Menu Principal</h1>
<div class="clHeaderTop" data-sticky="top"></div>
<a href="?pagina=home" class="clHeaderLogo" data-sticky="logoLink">
	<img src="app/assets/image/NucleoMAP1012x200_PB.svg" data-sticky="logoImage">
</a>
<nav class="clHeaderNav" data-sticky="nav">
	<ul class="clHeaderNavList">
		<li>
			<a target="_self" data-sticky="navLink" class="clNavLink">produtos</a>
		</li>
		<li>
			<a target="_self" data-sticky="navLink" class="clNavLink">serviços</a>
		</li>
		<li>
			<a target="_self" data-sticky="navLink" class="clNavLink">empresa</a>
		</li>
	</ul>

</nav>
<nav class="clHeaderNavIten">
	<ul class="clHeaderNavProdutos" data-navFlyout="navProdutos">
		<li>
			<a href="?pagina=seriePRNU">Série PRN</a>
		</li>
		<li>
			<a href="?pagina=serieSTNU">Série STN</a>
		</li>
	</ul>
	<ul class="clHeaderNavServicos" data-navFlyout="navServicos">
		<li>
			<a href="?pagina=automacaoIndustrial">Automação industrial</a>
		</li>
		<li>
			<a href="?pagina=automacaoResidencial">Automação residencial</a>
		</li>
		<li>
			<a href="?pagina=projetoEletrico">Projeto elétrico</a>
		</li>
		<li>
			<a href="?pagina=projetoMecanico">Projeto mecânico</a>
		</li>
		<li>
			<a href="?pagina=robotica">Robótica</a>
		</li>
	</ul>
	<ul class="clHeaderNavEmpresa" data-navFlyout="navEmpresa">
		<li>
			<a href="?pagina=sobreNos">Sobre nós</a>
		</li>
		<li>
			<a href="?pagina=contato">Contato</a>
		</li>
		<li>
			<a href="?pagina=parceiros">Parceiros</a>
		</li>
		<li>
			<a href="?pagina=localizacao">Localização</a>
		</li>
	</ul>
</nav>
<nav class="clHeaderNavMobile" onclick="navMobileOpen()">
	<div class="clHeaderNavSymbolMobile">
	</div>
	<div class="clHeaderNavSymbolMobile">
	</div>
	<div class="clHeaderNavSymbolMobile">
	</div>
</nav>
<nav class="clHeaderNavMobileIten" data-sticky="navMobile">
	<label class="clHeaderNavMobileLegend" data-navFlyout="navMobileLegend">
		<a id="idLegend">
		</a>
	</label>
	<ul class="clHeaderNavMobileFlyout" data-navFlyout="navMobileFlyout">
		<li>
			<a target="_self" onclick="addLegend('produtos')">produtos</a>
		</li>
		<li>
			<a target="_self">serviços</a>
		</li>
		<li>
			<a target="_self">empresa</a>
		</li>
	</ul>
	<ul class="clHeaderNavMobileFlyoutIten" data-navFlyout="navMobileProdutos">
		<li>
			<a href="?pagina=seriePRNU">Série PRN</a>
		</li>
		<li>
			<a href="?pagina=serieSTNU">Série STN</a>
		</li>
	</ul>
	<ul class="clHeaderNavMobileFlyoutIten" data-navFlyout="navMobileServicos">
		<li>
			<a href="?pagina=automacaoIndustrial">Automação industrial</a>
		</li>
		<li>
			<a href="?pagina=automacaoResidencial">Automação residencial</a>
		</li>
		<li>
			<a href="?pagina=projetoEletrico">Projeto elétrico</a>
		</li>
		<li>
			<a href="?pagina=projetoMecanico">Projeto mecânico</a>
		</li>
		<li>
			<a href="?pagina=robotica">Robótica</a>
		</li>
	</ul>
	<ul class="clHeaderNavMobileFlyoutIten" data-navFlyout="navMobileEmpresa">
		<li>
			<a href="?pagina=sobreNos">Sobre nós</a>
		</li>
		<li>
			<a href="?pagina=contato">Contato</a>
		</li>
		<li>
			<a href="?pagina=parceiros">Parceiros</a>
		</li>
		<li>
			<a href="?pagina=localizacao">Localização</a>
		</li>
	</ul>
</nav>
<svg class="clHeaderLineFull" data-sticky="svgLines">
	<g class="clHeaderLineBlack" data-sticky="gLines">
		<line x1="0" y1="7.5" x2="100%" y2="7.5"></line>
	</g>
</svg>
<svg class="clHeaderLines" data-sticky="svgLines">
	<g class="clHeaderLineGrey" data-sticky="gLines" id="idheaderLineGrey">
		<line x1="150" x2="100%" y1="-20" y2="-20"></line>
		<line x1="0" x2="105" y1="30" y2="30"></line>
		<line x1="105" x2="150" y1="30" y2="-20"></line>
	</g>
	<g class="clHeaderLineBlack" data-sticky="gLines">
		<line x1="0" y1="7.5" x2="100%" y2="7.5"></line>
	</g>
</svg>