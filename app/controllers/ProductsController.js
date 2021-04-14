const express = require('express');


const index = (request, response) => {
    const options = {
        attributes: [
            "id",
            "name",
            "username",
            "email",
            "phone",
            "date_of_birth",
            "gender",
            "is_private",
            "bio",
            "avatar",
            "cover_img",
            "role_id",
            "createdAt",
            "updatedAt"
        ],
        page: 1, // Default 1
        paginate: 15, // Default 25
        // order: [['name', 'DESC']],
        // where: { name: { [Op.like]: `%elliot%` } }
    }

    User.paginate(options).then((docs, pages, total) => {
        let result = {
            data: docs.docs,
            meta: {
                current_page: options.page,
                next_page: options.page + 1,
                last_page: docs.total,
                per_page: options.paginate,
                total: docs.total
            }
        };
        response.json(result);
    });

    /*User.findAll().then((users) => {
        response.json(users.paginate(options));
    })*/
};

const create = (request, response) => {
    let {name, username, email, password, phone, date_of_birth, gender, private, bio, avatar, cover_img, role_id} = request.body;

    User.create({
        name: name,
        email: email,
        password: password
    }).then((user) => {
        response.send(user);
    }, (errors) => {
        response.status(403).send(errors.toString());
    });
};

const update = (request, response) => {
    let {id} = request.params;
    let {name, email, password} = request.body;
    if (!isNaN(Number(id))) {
        User.findByPk(id).then((user) => {
            user.update({
                name: name,
                email: email,
                password: password
            }).then((user) => {
                response.send(user);
            }, (errors) => {
                response.status(403).send(errors.toString());
            });
        }, (errors) => {
            response.status(404).send("No User Found");
        });
    } else {
        response.status(404).send("Not Valid id : " + id);
    }
};

const view = (request, response) => {
    let {id} = request.params;

    if (!isNaN(Number(id))) {
        User.findByPk(id).then((user) => {
            if (user) {
                return response.json(user);
            } else {
                response.status(404).send("No User Found");
            }
        });
    } else {
        response.status(404).send("Not Valid id : " + id);
    }

};

const destroy = (request, response) => {
    let {id} = request.params;
    if (!isNaN(Number(id))) {
        User.findByPk(id).then((user) => {
            if (user) {
                user.destroy().then(() => {
                    response.status(204).send({message: "User Deleted Successfully!"});
                });
            } else {
                response.status(404).send("User  Found");
            }
        });
    } else {
        response.status(404).send("No User Found or Not Valid id");
    }

};


module.exports = {
    index,
    create,
    update,
    view,
    destroy
};
