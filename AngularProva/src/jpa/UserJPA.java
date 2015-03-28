/*
 * @author Marc Colom Royo - mcolomro@gmail.com
 */

package jpa;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AngularProva.user")
public class UserJPA implements Serializable {

	
	private static final long serialVersionUID = 1L;
	private int id;
	private String name;
	private String email;
	
	public UserJPA(){
		this.id=getId();
	}
	
	public UserJPA(String name) {
		super();
		this.name = name;
	}
	
	@GeneratedValue
	@Id
	@Column(name = "USER_ID")
	public int getId() {
		return id;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
