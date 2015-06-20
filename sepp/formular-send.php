<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Burschenverein Aubing e.V.</title>
        
        <!-- CSS -->
        <link href="_resources/css/style.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link href='http://fonts.googleapis.com/css?family=Cabin:400,700' rel='stylesheet' type='text/css'>

        <!-- Slick Slider -->
        <link rel="stylesheet" type="text/css" href="_resources/slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="_resources/slick/slick-theme.css"/>

        <!-- Fontawesome -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>
    <body>

    <div class="container">
        <div class="row">
            <div class="col-xs-offset-3 col-xs-6 col-sm-offset-0 col-sm-12 col-md-offset-2 col-md-8">
                <a href="#" id="header-img">
                    <img src="_resources/img/header.png" class="img-responsive center-block hidden-xs">
                    <img src="_resources/img/header-mobile.png" class="img-responsive center-block visible-xs">
                </a>
            </div>
        </div>
    </div>
    <div id="navbar"></div>

    <div class="container">

<?php
    if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $human = intval($_POST['human']);
        $from = 'Burschenverein'; 
        $to = 'p.bergmeir@gmail.com'; 
        $subject = 'Nachricht von Burschenverein';
        
        $body ="From: $name\n E-Mail: $email\n Message:\n $message";
        // Check if name has been entered
        if (!$_POST['name']) {
            $errName = 'Please enter your name';
        }
        
        // Check if email has been entered and is valid
        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }
        
        //Check if message has been entered
        if (!$_POST['message']) {
            $errMessage = 'Please enter your message';
        }
        //Check if simple anti-bot test is correct
        if ($human !== 5) {
            $errHuman = 'Your anti-spam is incorrect';
        }
// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
    if (mail ($to, $subject, $body, $from)) {
        $result='<div class="alert alert-success">Nachricht wurde erfolgreich abgeschickt</div>';
    } else {
        $result='<div class="alert alert-danger">Oops, es gab ein Problem mit deiner Nachricht. Bitte versuche es später noch einmal.</div>';
    }
}
    }
?>

        <form class="form-horizontal disabled" role="form" method="post" action="kontakt.html">
            <h1></h1>
            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" name="name" placeholder="Vor- & Nachname" value="<?php echo htmlspecialchars($_POST['name']); ?>">
                    <?php echo "<p class='text-danger'>$errName</p>";?>
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" name="email" placeholder="beispiel@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
                    <?php echo "<p class='text-danger'>$errEmail</p>";?>
                </div>
            </div>
            <div class="form-group">
                <label for="message" class="col-sm-2 control-label">Nachricht</label>
                <div class="col-sm-10">
                    <textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
                    <?php echo "<p class='text-danger'>$errMessage</p>";?>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-10 col-sm-offset-2">
                    <?php echo $result; ?>  
                </div>
            </div>
        </form>
    </div>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="_resources/scss/assets/javascripts/bootstrap.min.js"></script>

        <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="_resources/slick/slick.min.js"></script>
        <script type="text/javascript" src="_resources/js/own.js"></script>

    </body>
</html>