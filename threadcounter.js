// Keep track of open thread count and limit open threads

module.exports = {
    create: function() {
        that = this;
        this.threads = ps.subscribe('/threads', function(obj) {
            that.count += obj.inc;
            console.log('stat count ',that.count);
        })
    },
    count: 0
}