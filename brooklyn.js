var data = { label: 'Brooklyn', amount: 1, children: [] };
var username = 'admin';
var password = 'password';
$.ajax({
    username: username,
    password: password,
    url: 'http://localhost:8081/v1/applications/tree',
    type: 'GET',
    dataType: 'json',
    crossDomain: true,
    beforeSend: function(xhr) {
        var base64data = window.btoa(username + ":" + password);
        xhr.setRequestHeader("Authorization", "Basic " + base64data);
    },
    success: function(result) {
        data.children.push(entity(result[0].id, result[0].name, result[0].type, result[0].children));
        new BubbleTree({
            data: data,
            container: '.bubbletree'
        })
    }
});
function entity(id, name, type, nodes) {
    var node = { id: id, label: name, amount: 1, children: [] };
    if (type.indexOf("brooklyn.entity.basic") == 0) {
        node.color = "#006622";
    } else if (type.indexOf("brooklyn.entity") == 0) {
        node.color = "#001144";
    } else if (type.indexOf("App") >= 0) {
        node.color = "#229900";
    } else {
        node.color = "#446688";
    }
    if (nodes) {
        nodes.forEach(function(value) {
            var child = entity(value.id, value.name, value.type, value.children);
            node.children.push(child);
            node.amount += child.amount;
        });
    }
    return node;
}
