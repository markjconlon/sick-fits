const Query = {
  dogs(parent, args, context, info){
    global.dogs = global.dogs || [] //incase someone runs the query without any dogs created xyet
    return global.dogs;
  },
};

module.exports = Query;
