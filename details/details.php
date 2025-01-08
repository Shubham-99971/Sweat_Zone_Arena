<html>
    <head>
        <script src="details.js"></script>
        <link rel="stylesheet" href="detail.css">
    </head>
    <body>
        <div class="details">
            <form id="f" method="POST" action="">
                <label id="li">Enter the phone number</label>
                <input type="tel" name='phone' id="phone">
                <button type="submit">reset</button>
                <button type="submit" onclick="check()">check</button>
            </form>
        </div>
        <div class="t">
            <table>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>phone</th>
                    <th>join date</th>
                    <th>plan</th>
                </tr>
                <?php
                error_reporting(0);
                    $sname="localhost";
                    $uname="root";
                    $pass="";
                    $dbname="thesweatzone";
                    $conn = new mysqli($sname, $uname, $pass, $dbname);
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
                    $phone=$_POST['phone'];
                    $sql = "SELECT * FROM `members` WHERE phone = '$phone'";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                    while($row=$result->fetch_assoc()){
            ?>
                        <tr>
                            <td><?php echo$row['first name'];?></td>
                            <td><?php echo$row['last name'];?></td>
                            <td><?php echo$row['phone'];?></td>
                            <td><?php echo$row['joining'];?></td>
                            <td><?php echo$row['plan'];?></td>
                        </tr>
                        <?php
            }
                    }
                ?>
            </table>
        </div>
    </body>
</html>