<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Detail User</h1>
            </div>
            <div>
                <div v-if="datausers == null" class="alert alert-danger" role="alert">
               {{errormessage}}
                </div>
                <div  v-else class="card">
                    <img src="/default-pp.jpg" class="card-img-top" alt="...">
                         <div class="card-body">
                           <h5 class="card-title">{{datausers?.name}}</h5>
                            <address class="card-text">
                                <b>{{datausers?.username}}</b><br/>
                                {{datausers?.address?.street}},  {{datausers?.address?.suite}} <br/>
                                 {{datausers?.address?.city}},  {{datausers?.address?.zipcode}} <br/>
                                {{datausers?.phone}} <br/>
                                {{datausers?.website}} <br/>
                                {{datausers?.email}} <br/><br/>
                                <b>{{datausers?.company?.name}}</b><br/>
                                {{datausers?.company?.catchPhrase}} <br/>
                            </address>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        </layout-main>
    </div>
</template>

<script>
import LayoutMain from "@/views/LayoutMain";

export default {
    components: {
        LayoutMain
    },
    data(){
        return{
            id : this.$route.params.id,
            username : this.$route.params.username,
            datausers : null,
            errormessage: null
        }
    },
    methods:{
         getDetailUsers(id){
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then(response => response.json()) //then 1, set response sebagai json
                .then(json => {
                    if (json?.id !== undefined){
                        this.datausers = json;   
                    }
                    else{
                        this.errormessage = "Data User tidak ditemukan !";
                    }
                }) //then2, mengambil json dan ditampung/diset ke dalam data
                .catch(error => {
                    console.log(error);
                    this.errormessage = "Maaf tidak dapat memuat data user, silahkan coba kembali !";
                })
    }
},
mounted(){
    this.getDetailUsers(this.id);
    }
}
</script>