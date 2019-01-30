<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Basic TODO list</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<header>
			<div class="title">Basic TODO list</div>
		</header>

		<div class="content">
			<div class="flex-center">
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
			<table class="tasks-table">
				<tr>
					<th>Number</th><th>Date</th><th>Task</th><th>Actions</th>
				</tr>
			</table>
		</div>

		<footer>
			<div class="info">This is a footer which will contain random info later.</div>
			<div class="bottom">(c) 2019 Julien Bruguet</div>
		</footer>

		<!-- Jquery so I can use AJAX and other stuff -->
		<script src="js/jquery-3.3.1.min.js"></script>

		<!-- Some script for my form (something I am working on ;-) ) -->
		<script src="js/forms.js"></script>

		<!-- Scripts needed for the page to work -->
		<!-- task_request.js to show the tasks -->
		<script src="js/task_request.js"></script>
		<!-- task_action.js to add and manipulate tasks -->
		<script src="js/task_action.js"></script>
	</body>
</html>