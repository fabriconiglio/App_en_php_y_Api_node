<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
date_default_timezone_set('America/New_York');

require 'db.php';

$inputDateTime = $_POST['datetime'] ?? date('Y-m-d H:i:s');
$titleFilter = $_POST['title'] ?? '';

$weekDay = date('l', strtotime($inputDateTime));
$time = date('H:i:s', strtotime($inputDateTime));

$weekDaysOrdered = "'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'";

$sql = "
    SELECT ts.id, ts.title, ts.channel, ts.gender, tsi.week_day, tsi.show_time
    FROM tv_series ts
    INNER JOIN tv_series_intervals tsi ON ts.id = tsi.tv_series_id
    WHERE ts.title LIKE :titleFilter
    AND (
        (tsi.week_day = :weekDay AND tsi.show_time > :time) OR
        FIELD(tsi.week_day, $weekDaysOrdered) > FIELD(:weekDay, $weekDaysOrdered)
    )
    ORDER BY FIELD(tsi.week_day, $weekDaysOrdered), tsi.show_time
    LIMIT 1
";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    'titleFilter' => "%$titleFilter%",
    'weekDay' => $weekDay,
    'time' => $time
]);
$nextShow = $stmt->fetch(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Próxima Serie a Emitirse</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h1 class="mb-4">Consultar Próxima Serie a Emitirse</h1>
    <form action="index.php" method="post" class="mb-4">
        <div class="form-group">
            <label for="datetime">Fecha y Hora:</label>
            <input type="datetime-local" id="datetime" name="datetime" class="form-control"
                   value="<?php echo date('Y-m-d\TH:i'); ?>">
        </div>
        <div class="form-group">
            <label for="title">Filtrar por Título:</label>
            <input type="text" id="title" name="title" class="form-control" placeholder="Ingresar título...">
        </div>
        <button type="submit" class="btn btn-primary">Consultar</button>
    </form>

    <?php
    if ($nextShow) {
        echo "<div class='card'>
                <div class='card-body'>
                    <h5 class='card-title'>Próxima Serie a Emitirse</h5>
                    <p class='card-text'>La próxima serie a emitirse es <strong>{$nextShow['title']}</strong> en el canal <strong>{$nextShow['channel']}</strong> el día <strong>{$nextShow['week_day']}</strong> a las <strong>{$nextShow['show_time']}</strong>.</p>
                </div>
              </div>";
    } else {
        echo "<div class='alert alert-info' role='alert'>
                No hay series programadas para emitirse después de esta fecha y hora con el filtro aplicado.
              </div>";
    }
    ?>

</div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
