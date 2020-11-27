export const updateSolved= (data)=>{
	// var solved = [];
	// var numberofquizes = 500;     
	// for (var i = 0; i < numberofquizes; i++) {
	// solved.push(data.solve[i]);
	// }

	data.solve[Number(data.id)]=true;
	if(Number(data.id)<30)
   {
	   data.solveE.push(data.id);
   }    
	return (dispatch,getState,{getFirebase,getFirestore})=>{
		const firestore=getFirestore();
		firestore.collection('users').doc(data.uid).update({
			name:"abc"		
		}).then(()=>{
			dispatch({type:'CREATE_PROJECT1'});
		}).catch((err)=>{
			dispatch({type:'CREATE_PROJECT_ERR1'});
		})
		
	}

}


