import React from 'react';
import './Container.css';
import './App.css';
import {
  Document,
  Page,
  View,
  Text,
  Link,
  PDFDownloadLink,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import logo from '../img/logo.png';

const Quixote = (props) => (
  <Document>
    <Page style={styles.body}>
      <Text fixed>
        Pirkiniu sarasas || VU Nutri
      </Text>
      <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>
      <Image
        style={styles.image}
        src={logo}
      />
    </Page>
  </Document>
);


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});


const PDFGen = (props) => {
  return (
    <div>
      <PDFDownloadLink document={Quixote()} fileName="pirkiniai_nutri.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Kraunamas pirkinių sąrašas...' : <button type="button" className="btn btn-primary nutriColor">Generuoti PDF</button>)}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFGen;
