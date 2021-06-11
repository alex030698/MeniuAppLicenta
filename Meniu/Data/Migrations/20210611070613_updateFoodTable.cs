using Microsoft.EntityFrameworkCore.Migrations;

namespace Meniu.Data.Migrations
{
    public partial class updateFoodTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Food_preparationid",
                table: "Order");

            migrationBuilder.CreateTable(
                name: "Food1",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    amount = table.Column<int>(nullable: false),
                    price = table.Column<float>(nullable: false),
                    ingredients = table.Column<string>(nullable: true),
                    preparationTime = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food1", x => x.id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Food1_preparationid",
                table: "Order",
                column: "preparationid",
                principalTable: "Food1",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Food1_preparationid",
                table: "Order");

            migrationBuilder.DropTable(
                name: "Food1");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Food_preparationid",
                table: "Order",
                column: "preparationid",
                principalTable: "Food",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
