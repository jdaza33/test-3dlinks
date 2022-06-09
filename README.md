# TEST - 3DLinks | NodeJS

REST API para una prueba de trabajo creado por José Bolívar.
Tecnologias: NodeJS, Sequelize, Stripe y Elephantsql.
Base de datos: PostgresSQL

### DEMO --> https://test-3dlinks.herokuapp.com/

### POSTMAN --> https://documenter.getpostman.com/view/2941896/Uz5MEZPs

### DIAGRAMA DE BASE DE DATOS --> https://i.ibb.co/kJh4CtN/bd-proa2.png

## Install

    npm install

## Run the app

    npm start --> running on port 3001 by default

# Diagrama de base de datos

![diagrama](https://i.ibb.co/kJh4CtN/bd-proa2.png)

# Contexto

La API puede crear y listar usuarios, productos y tarjetas. Todo esto para crear una transacción.

- Para crear una tarjeta se uso una función de la pasarela de pago **[Stripe](https://stripe.com/es-us)**, esta toma los datos de una tarjeta y crea un token para poder usarlo a posterior. Esto se realizo para evitar guardar datos sensible en nuestra base de datos.
- Para crear una tarjeta es necesario estar logueado, ya que el endpoint pide un token bearer.
- Para crear una transacción es necesario haber creado un usuario, una tarjeta y un producto. Este servicio se conecta con **[Stripe](https://stripe.com/es-us)** para realizar un cargo sobre el token de la tarjeta antes creado.
- Por ultimo, para crear la base de datos se uso [**Elephantsql**](https://www.elephantsql.com/) para tenerlo en la nube.

# ¿Cómo usar?

1.  Cree un usuario
2.  Inicie sesión con el usuario creado
3.  Cree una tarjeta enviando el token que recibió del inicio de sesión
4.  Cree un producto
5.  Por ultimo, realice una transacción enviando la información antes creada. Para mas información, lea la [API](https://documenter.getpostman.com/view/2941896/Uz5MEZPs).
