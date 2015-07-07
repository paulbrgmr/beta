<?php
    if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $human = intval($_POST['human']);
        $from = 'Homepage'; 
        $to = 'p.bergmeir@gmail.com'; 
        $subject = 'Nachricht von Homepage';
        
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

<form id="formular-form" class="form-horizontal" role="form" method="post" action="#formular-submit">
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
            <textarea placeholder="Ihre Nachricht" class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
            <?php echo "<p class='text-danger'>$errMessage</p>";?>
        </div>
    </div>
    <div class="form-group">
        <!-- <label for="captcha" class="hidden"></label>
        <div class="hidden">
            <input type="" class="form-control" id="" name="" placeholder="" value="">
        </div> -->
        <div class="g-recaptcha col-xs-12" data-sitekey="6LfTcwkTAAAAACiYm9smnRJjvEmJ83UsXT9O8sty"></div>
    </div>
    <div class="form-group">
        <div class="col-sm-3 col-sm-offset-2">
            <input id="submit" name="submit" type="submit" value="Abschicken" class="btn btn-block btn-primary">
        </div>
    </div>
</form>