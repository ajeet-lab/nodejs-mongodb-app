
<b>GET Single Data from Database</b><br/>
POST: http://localhost:3000/api/loan/getsingle

{
        "requestHeader": {
            "tenantId": 505,
            "userDetail": {
                "userCode": "sachinm",
                "branchId": 5
            }
        },
        "loanId": "",
        "loanAcccountNo": "TCFCE040000115497",
        "fetchAllCharges": "N",
        "tenantId": 805,
        "considerLPPComputation": "N"
    }


<b>GET All Data from Database</b><br/>
GET : http://localhost:3000/api/loan/getall


<b>Insert Data to Database</b><br/>
POST : http://localhost:3000/api/loan
{
        "requestHeader": {
            "tenantId": 505,
            "userDetail": {
                "userCode": "sachinm",
                "branchId": 5
            }
        },
        "loanId": "",
        "loanAcccountNo": "TCFCE040000977534",
        "fetchAllCharges": "N",
        "tenantId": 1005,
        "considerLPPComputation": "N"
    }