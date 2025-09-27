import { Text, View, StyleSheet, FlatList } from "react-native";

export default function App() {
  // Variabel primitif
  const name = "Rahma";
  let age = 20;
  const isStudent = true;

  // Variabel kompleks
  const user = { name: "Rahma", role: "Mahasiswa" };
  const hobbies = ["Traveling", "Cooking", "Healing"];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>👩‍🎓 Profil Mahasiswa</Text>
        <Text style={styles.text}>Nama: {name}</Text>
        <Text style={styles.text}>Umur: {age} tahun</Text>
        <Text style={styles.text}>
          Status: {isStudent ? "Mahasiswa" : "Bukan Mahasiswa"}
        </Text>
        <Text style={styles.text}>
          User: {user.name} - {user.role}
        </Text>

        <Text style={[styles.title, { marginTop: 20 }]}>✨ Hobi</Text>
        <FlatList
          data={hobbies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.list}>• {item}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "skyblue",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    shadowColor: "#ffc6c6ff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#e80097ff",
    marginBottom: 5,
  },
  list: {
    fontSize: 16,
    color: "#e80097ff",
    marginVertical: 2,
  },
});

