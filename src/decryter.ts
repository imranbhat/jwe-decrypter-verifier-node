// @ts-ignore
const jose = require('jose')


const decryptionkey = jose.JWK.asKey("VkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5u8x/A?D(G+KbP");
const signingKey = jose.JWK.asKey("jWnZr4u7x!A%D*G-JaNdRgUkXp2s5v8y/B?E(H+MbPeShVmYq3t6w9z$C&F)J@NcRfTjWnZr4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E(H+MbQeThWmZq3t6w9z$C&F)J@NcRfUjXn2r5u7x!A%D*G-KaPdSgVkYp3s6v9y/B?E(H+MbQeThWmZq4t7w!z%C&F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z")

var jwe = 'eyJhbGciOiJkaXIiLCJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0..pPq27UilljHYB436TgIw1Q.pB7I1y1TvhAqPg_w9WDXT0ZE_hHfa1NEuyoNu4CyltHCOgsJ2SSDmbEoe6j_yI194x1_R-b3njSio84qEmEyK3HLjywYlBFoTncMAjBzXnE2oNclG5PYALA3ePm2_JAscq4K88-rc5d2zk4LQiee6xi-6WzPl3jSRpJN1lhsQXbiZv5Pn3TBPGG3dNjbwEFiNgJiHVdM6nbQS-RQUuNAny_IgCiu8Xnh15rd-zh_zcfWCDsAj9GsinG4lOYnSaDSkEMl9xCKMoPaIareaNkpFGO1YXTA8XVzRf3SbEM_JvS5N9n08HuC9AKjrlSt9ydqYrQlnuR7L-ScQ-06fYxGIVo7oOKUqmzlRsimejggOTbM9QyYqpvMmqQpEzDw9tkvH9kTDgiy0R9OGtZLSgoSyCqVcOp_qdJajbubATXpUUEg5BaYe3DGbIL8sx25xE7g5vrMPbfaaes8gkZ9tOQ4_cd7gAKKCq3xdCo14H1y-8-NCRweMk6u9qdGEhF32pfYazCv-MjrrKFBgPjVK21WBn0sQQXdCmtzI8XFOKpS_zKj5zVE45QirHFcEeHxthyrOdgYD1eNQYsHnk37UVO7yG1GUv8PQqtlOmi1gdqtQWL0asBudm0xNy-n-5I95Gy7VBEKbT9ailHFDx1nWi4MBx8mtmKQ4OxCNcy6vgr9-bmR7nV0qbYFihqWpRycRBw_joopDAVjXM9cqqfW5SYKajHBpxvW2Cg0Li56dAPTbDmb1uoN3fzdv_pNAtu7DkAZhzoNvJkKqatmnWmP7rZqCcg2yrwBsS09bsXAHF-xoRlRSXhoCgcLp5_SRYuce-iUXge-kiDAdct6PyLbVUx7WqKLnZMpaZo2WFs-n0t_HP37OSFAAWGeAHDrEU_K4BrChqqNc6jGTZAGu8ek69a9yXIwp5JTcs9fmfVTC4uUzL_46LJRl33RanNrj5_XxAMSZa7awfiodahGF_JPg5sl-R_KkZYpsvgqGTXItLDSz4PBrDsQhbekNvgPC0QZGa55NI5p7WRXD-LNsOa4ACyWIqoBzvEIl6CBQUTjQuTYl050yEcqV63IbQEI4iQz7X_nfvXD2mmSMSCVYxct90PZN0GEcDh4M0-DGphUJGC7_sV_k86aU_OAe-CZ1G8B66GKh15XBkbXeJL8qb-D20hP2Q5bKlDMDyi2Akgeh5smuLMg6HExgIRybOJu5ZH-NDnlNf6d0P6_d6qfU99_eyqII_RRiQQbWDf3HY9jxE-38_C7VstI0I7dhgnayL-b3_1I.BAiKOXQrBRmTMe3Ox_ytc8OKDNywDzFg0UiY5pYaHMY';

console.log("############################################decryption : start ########################################################");

var decryptedJws = jose.JWE.decrypt(jwe, decryptionkey)

var jws = decryptedJws.toString();
console.log(jws);
console.log("############################################decryption : end ########################################################");

console.log("############################################verification: start ########################################################");
var jwt = jose.JWS.verify(jws, signingKey)
console.log(jwt);


