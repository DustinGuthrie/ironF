module.exports = {
  project: [
      "<div class='thumbnail'>",
      "<div class='<%= \"thumbnail\" %>'>",
      // "<img src='<%= photo %>'>",
      "<div class='title'>",
      "<h3 class = 'titles'><%= title %></h3>",
      "<h5>Start Date:</h5>",
      "<h5 class = 'start-date'><%= startDate%></h4>",
      "<h4>Finish Date:</h4>",
      "<h4 class = 'finish-date'><%= finishDate%></h4>",
      "<p class = 'description'><%= description %></p>",
      "<h4><%= balance %></h4>",
      "<h4 class = 'goal'><%= goal %></h4>",
      // "<div class='progress'>",
      // "<div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width: 40%;'>40%</div>",
      "<div class='progress'>",
      "<div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuemin='0' aria-valuemax='100' style='width:<%=percentage%>%'> <%= balance%></div>",
      "</div>",
      "<form class='form-inline'>",
      "<div class='form-group'>",
      "<button class='btn btn-primary editProject' role='button' type='submit' name='edit'>Edit</button>",
      "</div>",
      "<div class='form-group'>",
      "<button class='btn btn-danger deleteProject' role='button' type='submit' name='delete'>Delete</button>",
      "</div>",
      "<div class='form-group'>",
      "<button class='btn btn-primary confirm-edit display-none' role='button'</button> ",
      "</div>",
      "<form class='form-inline'>",
      "<div class='form-group donateNow'>",
      // "<input type='<%= \"text\" %>' class='<%= \"form-control btn\" %>' id='<%= \"title\" %>' id='<%= \"donationAmount\" %>' placeholder='<%= \"$100\" %>'>",
      "<button class='btn btn-primary donateNow' role='button' type='submit' id='donateNow'>Donate Now</button>",
      "</div>",
      "</form>",
      "</div>",
      "</div>",
      // "</div>",
      // "</div>",
  ].join(""),
  form: [
       '<form class = "first-form" role="form">',
       '<div class="form-group">',
       '<label for="title">Fund Title:</label>',
       '<input type="text" required class="form-control" id="title">',
       '</div>',
       '<div class="form-group">',
       '<label for="release">Description:</label>',
       '<input type="text" required class="form-control description" id="description">',
       '</div>',
       '<div class="form-group">',
       '<label for="plot">Finish Date:</label>',
      //  '<input type="datetime-local" value = "09/01/2015" class="form-control" id="finishDate">',
      //  '<input type="datetime-local" class="form-control" id="finishDate">',
       '<input type="date" class="form-control" id="finishDate">',
      //  '<input type="date" required class="form-control" id="finishDate">',
       '</div>',
       '<div class="form-group">',
       '<label for="rating">Funding Goal:</label>',
       '<input type="number" required class="form-control" id="Goal">',
       '</div>',
       '<button  id= "submitted" type= "submit" class="btn btn-default">Create New Fund</button>',
       '</form>',
       '<body>',
  ].join(""),

  header: [
    '<nav class="navbar navbar-inverse navbar-fixed-top">',
    '<div class="container-fluid">',
      // <!-- Brand and toggle get grouped for better mobile display -->
    '<div class="navbar-header">',
    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">',
    '<span class="sr-only">Toggle navigation</span>',
    '<span class="icon-bar"></span>',
    '<span class="icon-bar"></span>',
    '<span class="icon-bar"></span>',
    '</button>',
    '<a class="navbar-brand" href="#">Iron Fund</a>',
    '<ul class="nav navbar-nav">',
    '<li class="active"><a href="#">About <span class="sr-only">(current)</span></a></li>',
    '<li><a href="#">Add a Project</a></li>',
    '</ul>',
    '</div>',

  // <!-- Collect the nav links, forms, and other content for toggling -->
    '<div class="signin-create-acct collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
    '<ul class="nav navbar-nav navbar-right">',
    '<li class="signin-create-acct">',
    '<a class="signin-create-acct" type="submit" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign-in / Create Account</a>',
    '</li>',
    '</ul>',
    '</div>', //<!-- /.navbar-collapse -->
    '</div>', //<!-- /.container-fluid -->
    '</nav>',
  ].join(""),
  loggedInHeader: [
    '<nav class="navbar navbar-inverse navbar-fixed-top">',
    '<div class="container-fluid">',
      // <!-- Brand and toggle get grouped for better mobile display -->
    '<div class="navbar-header">',
    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">',
    '<span class="sr-only">Toggle navigation</span>',
    '<span class="icon-bar"></span>',
    '<span class="icon-bar"></span>',
    '<span class="icon-bar"></span>',
    '</button>',
    '<a class="navbar-brand" href="#">Iron Fund</a>',
    '<ul class="nav navbar-nav">',
    '<li class="active"><a href="#">About <span class="sr-only">(current)</span></a></li>',
    '<li><a href="#">Add a Project</a></li>',
    '</ul>',
    '</div>',

  // <!-- Collect the nav links, forms, and other content for toggling -->
    '<div class="logout-user collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
    '<ul class="nav navbar-nav navbar-right">',
    '<li class="logout-user">',
    '<a class="logout-user" type="submit" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Logout</a>',
    '</li>',
    '</ul>',
    '</div>', //<!-- /.navbar-collapse -->
    '</div>', //<!-- /.container-fluid -->
    '</nav>',
  ].join(""),
  footer: [
    '<div class="footer-links">',
    '<nav class="navbar navbar-inverse navbar-fixed-bottom">',
    '<a class="navbar-brand" href="#">Iron Fund</a>',
    '<ul class="nav navbar-nav">',
    '<li class="active"><a href="#">About <span class="sr-only">(current)</span></a></li>',
    '<li><a href="#">Add a Project</a></li>',
    '</ul>',
    '</nav>',
    '</div>',
  ].join(""),
  donate:[
    '<div class = "donate">',
    '<p>How much would you like to donate?</p>',
    '<button class = " btn donate-btn" role="button" type="submit" id= "ten" class="btn btn-default">$10</button>',
    '<button class = "btn donate-btn"  role="button" type="submit" id= "twenty" class="btn btn-default">$20</button>',
    '<button class = "btn donate-btn" role="button" type="submit" id= "fifty" class="btn btn-default">$50</button>',
    '<input type="text" name = "donation-input" class="form-control btn"  placeholder="Other Amount">',
    '</div>'
  ].join(""),
  login: [
    '<div class="login-form">',
    '<form class="form-horizontal">',
    '<div class="form-group">',
    '<div class="col-sm-4 col-sm-offset-4">',
    '<input type="text" name="username" class="form-control" id="inputEmail3" placeholder="Email">',
    '</div>',
    '</div>',
    '<div class="form-group">',
    '<div class="col-sm-4 col-sm-offset-4">',
    '<input type="password" name="password" class="form-control" id="inputPassword3" placeholder="Password">',
    '</div>',
    '</div>',
    '<div class="form-group">',
    '<div class="col-sm-offset-4 col-sm-4 signIn">',
    '<button type="submit" name="submit" class="btn btn-default">Sign in</button>',
    '<a class="createUser" href="#">Create New Account</a>',
    '</div>',
    '</div>',
    '</form>',
    '</div>',
  ].join(""),
  createuser: [
    '<div class="createuser-form">',
    '<form class="form-horizontal" action="login" method="post">',
    '<div class="form-group">',
    '<div class="col-sm-4 col-sm-offset-4">',
    '<input type="text" name="username" class="form-control" id="inputEmail3" placeholder="Email">',
    '</div>',
    '</div>',
    '<div class="form-group">',
    '<div class="col-sm-4 col-sm-offset-4">',
    '<input type="password" name="password" class="form-control" id="inputPassword3" placeholder="Password">',
    '</div>',
    '</div>',
    '<div class="form-group">',
    '<div class="col-sm-offset-4 col-sm-4">',
    '<button type="submit" name="submit" class="btn btn-default">Create New Account</button>',
    '<a class="createUser" href="#">Sig-in to Existing Account</a>',
    '</div>',
    '</div>',
    '</form>',
    '</div>',
  ].join(""),
};
