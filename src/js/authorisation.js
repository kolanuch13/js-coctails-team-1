import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDoc, getDocs } from 'firebase/firestore';
// ==================================Admin

const serviceAccount = require("../apikeys/js-coctails-team-1-firebase-adminsdk-ky0u4-b6c1fe0374.json");

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDKzcjJU-AVy0eRGXydImC-xzrjz3FXAO8",
    // projectName: "JS-COCTAILS-TEAM-1",
    projectId: "js-coctails-team-1",
    // projectNumber: "624341006577",
    client_email: "Kolanuch13@gmail.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDE0VA3gNKCAZTY\nv3hBisM0xgiZtf/PYOQJ00FWX+oSX9Nc7C2dENnHBqtsrM3dp+SnaEPhCUyoDeCe\nY/oY0VxbS9CZHz9do0EbOFqxR4QXpBHMuLqDg2zsysB/Sx4BhoVY6bV1iUxac2Gp\nUFzsP7fnQ4tSIBLCTbjstln4IF/gjk+NlUdMiO7V742QPPJVQ6rMdNgqRlm5Q82r\nUepsSZL66rWStugW+metW7XFUAv4xKpMNtlbrlKgXHzfuLIjPi0BBp7BEY7UUThR\n2D007MR5k9clZw3B6TbbWfcv0UOitQSrTID9+Yp2ZZhF7/T92ys7rlHyqkD9ahTe\npIYmOAW/AgMBAAECggEAFW41LdX5Fe7WJkOy9HAHkVd+2D3Y/Nuv+OHn21/WPOny\nOcv9q3yKOgGf6NVoFRqS6yePPJGmpyXbr2NzeABT7hzzObkNTUTZcf1Q4rzGxUw4\nI/J5XJiS47WwACxNuBzNqEDKYWHxzmeB2s3FUHQfsi7InMihQkb0O9IfOcVMq0ai\nb03g1xu0A/t43WB+I2RJYpfOoM5oLlXT1umRhE5//pAjLwGPbMV4Lt3c5oKGDk5y\nRwqFisecIgMar8Py9/+QfLig+7SU9b18RNt3Com5wiur+h3UBen9CjJt59xVyNq9\nURGUV4CrJG9NVJmqLsGi6Hc4dmriTPphPcqkVvRJAQKBgQD7mlmskT9f4Ft+/tZR\nd+5ITdkgPyTtPjkw9pKcvZnEEBFrlEbs437hVTLoA/veJ4FmzIaZiJ+GYzh5hC8U\nC5DdAKkBxOacPoTgGAzL4bsuLLoAwPRW4SNVCMatdM2YanxDwaTclGD+lJJsuQCP\nPUO+i4V2hA5er9pcOyjb6u4KjQKBgQDIQdu+I+CxaPgLYWyHeDlf86jgXOMcPR8y\nonj5YcV3M72swEa1ztvHDL/qTEFcR+rZHROsHlpRDz+u4MCfYsdpY+m/186C3E+3\nbJo6AajSt2sfp9PJHIoUwfLalMN3X87q9uVwbW8fyeqj8trHB1em32//raC8tiWY\nxqTqdhnEewKBgCLQHJBQGKC/fml4AVeMbJ/8hYp8sjNRZMBtnaOqaFhEkOR9w8KL\nR8cN7tlDk9oNRU5gBk/AI7KIkAvgSlNPtl+d88SW5gHAdMo9Cag8N5YQAjyQdj5/\nMFBXwoXFn5zzPvZxGMqcjT8sd4YrovQu2ezHiVP4ubRISMJyPRkQzJcRAoGBAINw\n9tKuqeTIiUavA5VHjCE2xTm+vjLiy39otQ665el/xJeG/OKIjCjybWVT9/KiIbuw\nIiFvKsjZwWr/im8TXuAF/H83Hw01nf0/A1vfivgD/AQjHBd87AUD6GsgCcxozl/a\n/m305mNvHNvPo1nPr/CP5+tiA4bZ54OHnudl7TPRAoGAXbivQn18wjrGJDX76Iph\nnwY0Q088VZGI87eR1RLARqZb5x0ayBRKqK+YKJlC4YaScT0aOxIGtUZi8I10wxzB\nWSHnQz5eHvZpEowoDUQg7xMQvBr0URm7BDL6Q35CsdI0954JhiUM97iAQmOAS4te\ncfvPnBAorimCEcn6kCwU1PI=\n-----END PRIVATE KEY-----\n",
});
// ==================================Client

// ==================================Authorisation

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user === null) {
        console.log("Log in now!");
    } else {
        console.log(`You are logged in as ${user}`);
    }
});

signInWithPopup(auth);
// ==================================Storing

const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

const cocktailRef = doc(db, 'Cocktails/my-awesome-cocktail')

setDoc(cocktailRef, {
    owner: auth.currentUsed.id,
})

onSnapshot(cocktailRef, snapshot => {
    const cocktail = snapshot.data();
})