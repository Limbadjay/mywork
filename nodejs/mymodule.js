function mylog(meassage)
{
    console.log(meassage);
}
function mywarn(meassage)
{
    console.warn(meassage);
}
function myerror(meassage)
{
    console.error(meassage);
}
//exporting function
module.exports.log = mylog;
module.exports.error = myerror;
module.exports.warn = mywarn;