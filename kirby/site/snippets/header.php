<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
    <meta name="description" content="<?php echo $site->description()->html() ?>">
    <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

    <!-- Adobe Typekit -->
    <script src="https://use.typekit.net/vfo7scv.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>

    <?php echo css('assets/css/style.min.css') ?>
    <?php echo js('assets/js/jquery.min.js') ?>
    <?php echo js('assets/js/bootstrap.min.js') ?>
    <?php echo js('assets/js/scroll-up-down.min.js') ?>
    <?php echo js('assets/js/fontfaceobserver.js') ?>
    <?php echo js('assets/js/pbrgmr.min.js') ?>
    <?php echo css('assets/css/font-awesome.min.css') ?>

</head>
<body>

    <!-- <header class="header cf" role="banner"> -->
    <header>
        <!-- <a class="logo" href="<?php echo url() ?>">
            <img src="<?php echo url('assets/images/logo.svg') ?>" alt="<?php echo $site->title()->html() ?>" />
        </a>
         -->
        <?php snippet('menu') ?>
    </header>
    <div class="container">