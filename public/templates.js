module.exports = {
  project: [
      // "<div class='<%= \"row\" %>'>",
      // "<div class='<%= \"col-sm-6 col-md-4\" %>'>",
      "<div class='<%= \"thumbnail\" %>'>",
      // "<img src='<%= photo %>'>",
      "<div class='<%= \"title\" %>'>",
      "<h3><%= title %></h3>",
      // "<h4><%= startDate %></h4>",
      "<h4><%= finishdate %></h4>",
      "<p><%= description %></p>",
      // "<h4><%= balance %></h4>",
      "<h4><%= goal %></h4>",
      "<div class='<%= \"progress\" %>'>",
      "<div class='<%= \"progress-bar progress-bar-success progress-bar-striped\"%>' role='<%= \"progressbar\"%>' aria-valuenow='<%= \"40\"%>' aria-valuemin='<%=\"0\"%>' aria-valuemax='<%= \"100\"%>' style='<%= \"width:40%\"%>'> <%= \"40%\"%></div>",
      "</div>",

      "<form class='<%= \"form-inline\" %>'>",
      "<div class='<%= \"form-group\"%>'>",
      "<button class='<%= \"btn btn-primary editProject\" %>' role='<%= \"button\"%>' type='<%= \"submit\"%>' name='<%= \"edit\"%>'> <%= \"Edit\" %></button>",
      "</div>",
      "<div class='<%= \"form-group\"%>'>",
      "<button class='<%= \"btn btn-danger deleteProject\" %>' role='<%= \"button\"%>' type='<%= \"submit\"%>' name='<%= \"delete\"%>'> <%= \"Delete\" %></button>",
      "</div>",
      // "<form class='<%= \"form-inline\" %>'>",
      "<div class='<%= \"form-group donateNow\"%>'>",
      "<input type='<%= \"text\" %>' class='<%= \"form-control btn\" %>' id='<%= \"title\" %>' id='<%= \"donationAmount\" %>' placeholder='<%= \"$100\" %>'>",
      "<button class='<%= \"btn btn-primary donateNow\" %>' role='<%= \"button\"%>' type='<%= \"submit\"%>' id='<%= \"donateNow\"%>'> <%= \"Donate Now\" %>",
      "</button>",

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
       '<input type="text" class="form-control" id="title">',
       '</div>',
       '<div class="form-group">',
       '<label for="release">Description:</label>',
       '<input type="text" class="form-control description" id="description">',
       '</div>',
       '<div class="form-group">',
       '<label for="plot">Finish Date:</label>',
       '<input type="text" value = "09/01/2015" class="form-control" id="finishDate">',
       '</div>',
       '<div class="form-group">',
       '<label for="rating">Funding Goal:</label>',
       '<input type="text" class="form-control" id="Goal">',
       '</div>',
       '<label for="cover">Cover Img:</label>',
       '<input class = "form-group" type="file"name="pic" id= "image" accept="image/*">',
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
      '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
        '<ul class="nav navbar-nav navbar-right">',
          // '<li><a href="#">Link</a></li>',
          '<li class="dropdown">',
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span class="caret"></span></a>',
            '<ul class="dropdown-menu">',
              '<li><a href="#">Action</a></li>',
              '<li><a href="#">Another action</a></li>',
              '<li><a href="#">Something else here</a></li>',
              '<li role="separator" class="divider"></li>',
              '<li><a href="#">Separated link</a></li>',
            '</ul>',
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
  login: [

  ].join(""),
  createuser: [

  ].join(""),
};
