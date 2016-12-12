<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Login page</title>
    <link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
    <link href="css/styles.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css"
          href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css"/>
</head>


<body>
<%@ include file="header.jsp" %>


<div class="container">

    <div class="row" style="margin-left:0px;padding-bottom:25px; ">
        <div class="col-sm-5">
            <input class="form-control" placeholder="search...">
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <c:forEach items="${employees}" var="employee">
                    <tr class="info">
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.salary}</td>
                        <td>
                            <form:form action="list" method="POST" commandName="employee">
                                <input type="hidden" name="id" value="${employee.id}" />
                                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                                <button class="btn btn-primary" type="submit" value="Edit">Edit</button>
                            </form:form>
                        </td>
                        <td>
                            <button type="submit" value="Edit" class="btn btn-primary">Delete
                            </button>
                        </td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>

        <div ng-if="showEditPanel" class="col-sm-6" style="padding:40px; outline: 0.25px solid black;">
            <form:form action="register" method="post"  class="form-horizontal" role="form">
                <div class="alert alert-success fade in">
                    <strong>Success!</strong> Employee has been updated successfully.
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3">Name:</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Name" required>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-3">Age:</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Age" required>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-3">Salary:</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Salary" required>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" value="Save" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </form:form>
        </div>
    </div>
</div>


<%@ include file="footer.jsp" %>
</body>
</html>