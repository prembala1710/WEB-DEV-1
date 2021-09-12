<%@ page import = "java.io.*,java.util.*,java.sql.*"%>
<%@ page import = "javax.servlet.http.*,javax.servlet.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>
<sql:setDataSource var = "snapshot" driver = "com.mysql.jdbc.Driver"
         url = "jdbc:mysql://localhost/PROJECT"
         user = "root"  password = ""/>
<c:set var="RegisterNo" value="${param.RegisterNo}"/>
<c:set var="Password" value="${param.Password}"/>
<sql:query dataSource = "${snapshot}" var = "result">
         SELECT StuName,Dept FROM STUDENT WHERE RegNo='${RegisterNo}' AND Password='${Password}';
</sql:query>
<c:forEach var="rows" items="${result.rows}">
	<c:set var="Department" value="${rows.Dept}"/>
	<c:set var="StuName" value="${rows.StuName}"/>
	<%
		String StudentName = (String)pageContext.getAttribute("StuName");
		String Department = (String)pageContext.getAttribute("Department");
		Cookie Dept = new Cookie("Dept",Department);
		Cookie StuName = new Cookie("StuName",StudentName);
		Dept.setMaxAge(60*60);
		StuName.setMaxAge(60*60);
		response.addCookie(Dept);
		response.addCookie(StuName);
	%>
	<c:redirect url="/${rows.Dept}/Home.html" />
</c:forEach>	
<c:redirect url="Home.html" />