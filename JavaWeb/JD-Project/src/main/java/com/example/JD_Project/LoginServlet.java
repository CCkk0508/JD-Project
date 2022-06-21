package com.example.JD_Project;

import com.example.JD_Project.util.JDBCUtils;

import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.*;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("GBK");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println(username + password);
        Connection connection = null;
        ResultSet resultSet = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = JDBCUtils.getConnection();
//            Class.forName("com.mysql.jdbc.Driver");
            //3.获取连接
//            connection = DriverManager.getConnection("jdbc:mysql:///jd-project", "root", "20020605");
            //4.定义sql

            String sql = "select * from user where(username=? and password=?)||(email=? and password=?)||(phone=? and password=?)";
            preparedStatement = connection.prepareStatement(sql);
            //5.获取执行sql的对象
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);
            preparedStatement.setString(3, username);
            preparedStatement.setString(4, password);
            preparedStatement.setString(5, username);
            preparedStatement.setString(6, password);
            resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                response.getWriter().println("<h1>登录成功</h1>");
            } else {
                response.getWriter().println("<h1>用户名密码错误</h1>");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
//            if (resultSet != null) {
//                try {
//                    resultSet.close();
//                } catch (SQLException throwables) {
//                    throwables.printStackTrace();
//                }
//                if (connection != null) {
//                    try {
//                        connection.close();
//                    } catch (SQLException throwables) {
//                        throwables.printStackTrace();
//                    }
//                }
//                if (preparedStatement != null) {
//                    try {
//                        preparedStatement.close();
//                    } catch (SQLException throwables) {
//                        throwables.printStackTrace();
//                    }
//                }
//            }
            JDBCUtils.close(preparedStatement,connection,resultSet);

        }
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        this.doGet(request, response);
    }
}
