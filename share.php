<?php   header("Content-Type:text/html;charset=UTF-8");

 include('new/system.php');
 include('new/product/system.php'); 
 
 $id  = $_GET['id'];
 
 $sql = "select name,pic from `$product_table` where id='$id'";
 $res = mysql_query($sql);
 $row = mysql_fetch_array($res);
 
 $pic = 'http://www.icareu.tw/new/product'.substr($row['pic'],2);
?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>艾可開發 - 專業電商品牌代理商，全方位的銷售夥伴</title>
<meta property="og:title" content="ICareU嚴選 全台最大封閉式企業團購" />
<meta property="og:type" content="article" />
<meta property="og:image" content="<?php echo $pic; ?>" />
<meta property="og:url" content="http://www.icareu.tw/new/front/share.php?id=<?php echo $id; ?>" />
<meta property="og:description" content="在 ICareU幸福團購 獲得<?php echo $row['name']; ?>最佳好康" />


</head>

<body>

 <img src="<?php echo $pic; ?>"  /> 

<script>
 window.location.href='edm.php';
</script>
</body>
</html>
