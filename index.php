<!DOCTYPE html>
<html>
	<head>
		<title>Basic TODO list</title>

		<!-- I don't want to deal with random characters -->
		<meta charset="UTF-8">

		<!-- So it doesn't look small as hell on smaller screens -->
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- My own stylesheet -->
		<link rel="stylesheet" href="css/style.css">

		<!-- Jquery so I can use AJAX and other stuff -->
		<script src="js/jquery-3.3.1.min.js"></script>

	</head>
	<body>
		<header>
			<div class="title">Basic TODO list</div>
		</header>

		<div class="content">
			<!-- Centering the little add form -->
			<div class="flex-center">

				<!-- Add form -->
				<form class="form-control">
					<div class="form-group">
						<input type="text" name="message" id="message" class="form-control-input">
						<label for="message" class="form-label">Content</label>
					</div>
					<div class="form-group">
						<input type="datetime-local" name="date" id="date" class="form-control-input">
						<label for="date" class="form-label">Date</label>
					</div>
					<input type="submit" name="submit" id="submit" value="Add" class="btn-add">
					<input type="hidden" name="action" id="action" value="add">
				</form>
			</div>

			<!-- Tasks list -->
			<table class="tasks-table">
				<tr>
					<th>Number</th><th>Date</th><th>Task</th><th>Actions</th>
				</tr>
				<!-- Tasks will be added over here like this:
				<tr>
					<td>##</td><td>DD/MM/AAAA HH:MM:SS</td><td>Lorem ipsum...</td><td>Buttons here</td>
				</tr>
				-->
			</table>
		</div>

		<footer>
			<div class="info">This is a footer which will contain random info later.</div>
			<div class="bottom">(c) 2019 Julien Bruguet</div>
		</footer>

		<!-- Some script for my form (something I am working on ;-) ) -->
		<script src="js/forms.js"></script>

		<!-- Scripts needed for the page to work -->
		<!-- task_request.js to show the tasks -->
		<script src="js/task_request.js"></script>
		<!-- task_action.js to add and manipulate tasks -->
		<script src="js/task_action.js"></script>
	</body>
</html>